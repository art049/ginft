import { HappyApes__factory } from "@ginft/contracts/dist/typechain";
import { createContext, useContext, useEffect, useState } from "react";
import { staticConfig } from "src/config";
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
          tokens: tokenIds.map((tid) => ({
            tokenId: tid.toNumber(),
            contractAddress: happ.address,
          })),
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
}

interface UserNFTsContext {
  isLoaded: boolean;
  tokens: UserNFT[];
}
