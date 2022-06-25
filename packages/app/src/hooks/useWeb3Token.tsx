import { requestWeb3Token, verifyWeb3Token, Web3Token } from "@ginft/web3token";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { useWallet } from "./useWallet";

const useWeb3Token = () => {
  const wallet = useWallet();
  const [web3Token, setWeb3Token] = useLocalStorage<Web3Token>("web3token");
  const [isValid, setIsValid] = useState(false);
  const [hasToken, setHasToken] = useState(() => !!web3Token);

  useEffect(() => {
    if (wallet.isWalletConnected && hasToken && web3Token) {
      try {
        if (web3Token.signerAddress !== wallet.userAddress) {
          throw new Error(
            `Web3Token address does not match expected: ${wallet.userAddress} but got ${web3Token.signerAddress}`
          );
        }
        verifyWeb3Token(web3Token);
        setIsValid(true);
      } catch (e) {
        console.log("Invalid token", e);
        setHasToken(false);
        setIsValid(false);
      }
    }
  }, [
    wallet.isWalletConnected,
    wallet.isWalletConnected && wallet.userAddress,
    hasToken,
    web3Token,
  ]);

  useEffect(() => {
    if (wallet.isWalletConnected && !hasToken) {
      const signatureRequest = async () => {
        try {
          const signer = wallet.signer;
          const signerAddress = await signer.getAddress();
          if (signerAddress !== wallet.userAddress) {
            return;
          }
          const token = await requestWeb3Token(signer);
          setWeb3Token(token);
          setHasToken(true);
        } catch (e) {
          console.error("Error signing message", e);
          setHasToken(false);
          signatureRequest();
        }
      };
      signatureRequest();
    }
  }, [hasToken, isValid, wallet.isWalletConnected]);

  return {
    web3Token: web3Token,
    loaded: hasToken && isValid,
  };
};

export default useWeb3Token;
