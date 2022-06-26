import {
  GiftBox__factory,
  IERC721__factory,
} from "@ginft/contracts/dist/typechain";
import { BigNumber, ethers } from "ethers";
import { hexlify, solidityKeccak256 } from "ethers/lib/utils";
import { staticConfig } from "src/config";
import { useWallet } from "./useWallet";

export const useGiftBox = () => {
  const wallet = useWallet();
  const wrap = async (
    giftee: string,
    contractAddress: string,
    tokenId: BigNumber
  ) => {
    if (wallet.isWalletConnected) {
      const giftBoxAddress = staticConfig.contracts.GiftBox.address;
      const giftBox = GiftBox__factory.connect(giftBoxAddress, wallet.signer);
      const initialSupply = await giftBox.totalSupply();
      const tx = await giftBox.mint(giftee);
      const receipt = await tx.wait();
      const events = await giftBox.queryFilter(
        giftBox.filters.GiftMinted(),
        receipt.blockHash
      );
      const matching = events.find(
        (event) =>
          event.args.sender === wallet.userAddress &&
          event.args.giftee === giftee &&
          event.args.tokenId >= initialSupply
      );
      if (!matching) {
        throw new Error("Unable to find the tokenId");
      }
      const giftId = matching.args.tokenId;
      console.log(`gift #${giftId} minted`);
      const secret = ethers.utils.randomBytes(32);
      const hashedSecret = solidityKeccak256(
        ["uint256", "bytes32"],
        [giftId, secret]
      );
      const nftContract = IERC721__factory.connect(
        contractAddress,
        wallet.signer
      );
      await nftContract["safeTransferFrom(address,address,uint256,bytes)"](
        wallet.userAddress,
        giftBox.address,
        tokenId,
        hashedSecret
      );
      console.log("NFT deposited");
      console.log(`Secret: ${hexlify(secret)}`);
    }
  };

  const unwrap = async (giftId: BigNumber, secret: string) => {
    if (wallet.isWalletConnected) {
      const giftBoxAddress = staticConfig.contracts.GiftBox.address;
      const giftBox = GiftBox__factory.connect(giftBoxAddress, wallet.signer);
      await giftBox.open(giftId, secret);
    }
  };
  return { wrap, unwrap };
};
