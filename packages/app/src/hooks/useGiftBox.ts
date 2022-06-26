import {
  GiftBox__factory,
  IERC721__factory,
} from "@ginft/contracts/dist/typechain";
import { BigNumber, ethers } from "ethers";
import { hexlify, solidityKeccak256 } from "ethers/lib/utils";
import { staticConfig } from "src/config";
import { useTransaction } from "./useTransaction";
import { useWallet } from "./useWallet";

export const useGiftBox = () => {
  const wallet = useWallet();
  const { track } = useTransaction();
  const wrap = async (
    giftee: string,
    contractAddress: string,
    tokenId: BigNumber,
    giftCid: string
  ) => {
    if (!wallet.isWalletConnected) {
      throw Error("Wallet not yet connected");
    }

    const giftBoxAddress = staticConfig.contracts.GiftBox.address;
    const giftBox = GiftBox__factory.connect(giftBoxAddress, wallet.signer);
    const initialSupply = await giftBox.totalSupply();
    const receipt = await track(
      "Minting the Gift Box",
      giftBox.mint(giftee, `ipfs://${giftCid}`)
    );
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
    await track(
      "Locking the NFT in the Gift",
      nftContract["safeTransferFrom(address,address,uint256,bytes)"](
        wallet.userAddress,
        giftBox.address,
        tokenId,
        hashedSecret
      )
    );
    const hexSecret = hexlify(secret);
    console.log("NFT deposited");
    console.log(`Secret: ${hexSecret}`);

    return `${staticConfig.frontBaseUrl}/open/${giftId}/${hexSecret}`;
  };

  const unwrap = async (giftId: BigNumber, secret: string) => {
    if (!wallet.isWalletConnected) {
      throw Error("Wallet not yet connected");
    }
    const giftBoxAddress = staticConfig.contracts.GiftBox.address;
    const giftBox = GiftBox__factory.connect(giftBoxAddress, wallet.signer);
    const receipt = await track(
      "Opening the gift box",
      giftBox.open(giftId, secret)
    );
    const events = await giftBox.queryFilter(
      giftBox.filters.GiftOpened(),
      receipt.blockHash
    );
    console.log(events);
    console.log(giftId);
    const matching = events.find((event) => event.args.giftId.eq(giftId));
    if (!matching) {
      throw new Error("Unable to find the tokenId");
    }
    return {
      contractAddress: matching.args.tokenContract,
      tokenId: matching.args.tokenId,
    };
  };
  return { wrap, unwrap };
};
