import { HappyApes__factory } from "@ginft/contracts/dist/typechain";
import { createContext, useContext, useEffect, useState } from "react";
import { staticConfig } from "src/config";
import { NFTMetadata } from "src/interfaces";
import { getNFTMetadata } from "src/util";
import { useWallet } from "./useWallet";

export const UserNFTsContext = createContext<UserNFTsContext>({
  isLoaded: false,
  tokens: [],
});

export const useUserNFTs = () => useContext(UserNFTsContext);

export const UserNFTsProvider: React.FC = ({ children }) => {
  const [context, setContext] = useState<UserNFTsContext>({
    isLoaded: false,
    tokens: [],
  });
  const wallet = useWallet();
  useEffect(() => {
    console.log(wallet);
    if (
      wallet.isLoaded &&
      wallet.isWalletSelected &&
      wallet.isWalletConnected
    ) {
      console.log(wallet.userAddress);
      const happAddress = staticConfig.contracts.HappyApes.address;
      const fetchNFTs = async () => {
        const happ = HappyApes__factory.connect(happAddress, wallet.signer);
        const balance = (await happ.balanceOf(wallet.userAddress)).toNumber();
        console.log(`${wallet.userAddress} balance : ${balance}`);
        const tokenIds = await Promise.all(
          Array.from({ length: balance }, (x, i) =>
            happ.tokenOfOwnerByIndex(wallet.userAddress, i)
          )
        );
        console.log(tokenIds);
        setContext({
          isLoaded: true,
          tokens: await Promise.all(
            tokenIds.map(async (tid) => ({
              tokenId: tid.toNumber(),
              contractAddress: happ.address,
              metadata: await getNFTMetadata(happ.address, tid, wallet.signer),
            }))
          ),
        });
      };
      fetchNFTs();
    }
  }, [
    wallet.isWalletConnected,
    wallet.isLoaded,
    wallet.isWalletSelected,
    wallet.isWalletConnected && wallet.userAddress,
  ]);
  return (
    <UserNFTsContext.Provider value={context}>
      {children}
    </UserNFTsContext.Provider>
  );
};

interface UserNFT {
  contractAddress: string;
  tokenId: number;
  metadata: NFTMetadata;
}

interface UserNFTsContext {
  isLoaded: boolean;
  tokens: UserNFT[];
}
