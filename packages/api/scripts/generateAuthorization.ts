import { encodeWeb3Token, requestWeb3Token } from "@demoslabs/web3token";
import { Wallet } from "ethers";

const getAuthorizationString = async (wallet: Wallet) => {
  const web3token = await requestWeb3Token(wallet);
  return encodeWeb3Token(web3token);
};

const main = async () => {
  for (const i of [...Array(6).keys()]) {
    const wallet = Wallet.fromMnemonic(
      "test test test test test test test test test test test junk",
      `m/44'/60'/0'/0/${i}`
    );
    console.log(
      `Wallet #${i}: Address: ${
        wallet.address
      } Auth: ${await getAuthorizationString(wallet)}`
    );
  }
};
main();
