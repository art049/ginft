import { Wallet } from "ethers";
import {
  decodeWeb3Token,
  encodeWeb3Token,
  requestWeb3Token,
  verifyWeb3Token,
  Web3TokenVerificationError,
} from "../src/web3token";

const signer = Wallet.createRandom();

test("A generated web3token should be valid", async () => {
  const token = await requestWeb3Token(signer);
  expect(token.signerAddress).toBe(signer.address);
  expect(() => verifyWeb3Token(token)).not.toThrow();
});

test("A forged web3token should be invalid", async () => {
  const token = await requestWeb3Token(signer);
  token.signerAddress = "0x0000000000000000000000000000000000000000";
  expect(token.signerAddress).not.toBe(signer.address);
  expect(() => verifyWeb3Token(token)).toThrow(Web3TokenVerificationError);
});

test("Encoding a token and decoding it should be bijections", async () => {
  const token = await requestWeb3Token(signer);
  const encoded = encodeWeb3Token(token);
  const decodedToken = decodeWeb3Token(encoded);
  expect(decodedToken).toStrictEqual(token);
});
