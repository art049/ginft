import { Signer } from "ethers";
import { verifyMessage } from "ethers/lib/utils";
import { parse } from "yaml";

export interface Web3Token {
  signature: string;
  message: string;
  signerAddress: string;
}

export interface Web3TokenMetadata {
  time: Date;
  nonce: number;
}

const welcomeMessage =
  "Welcome to Demos Ventures !\n" +
  "To avoid spam and to authenticate you, please sign this message.";

const generateMessage = (time: Date, nonce: number) => `${welcomeMessage}
---
time: ${time.toISOString()}
nonce: ${nonce}
`;

export const requestWeb3Token = async (signer: Signer): Promise<Web3Token> => {
  const time = new Date();
  const nonce = Math.floor(Math.random() * 100000);
  const message = generateMessage(time, nonce);
  const signature = await signer.signMessage(message);
  return {
    message,
    signature,
    signerAddress: await signer.getAddress(),
  };
};

export class Web3TokenParsingError extends Error {
  constructor(message) {
    super(message);
    this.name = "Web3TokenParsingError";
  }
}

export const extractWeb3TokenMetadata = (
  rawToken: Web3Token
): Web3TokenMetadata => {
  try {
    const [message, rawMetadata] = rawToken.message.split("\n---\n");
    if (message.localeCompare(welcomeMessage) !== 0) {
      throw new Web3TokenParsingError("Message is not the expected one.");
    }
    const decoded = parse(rawMetadata);
    let time: Date;
    let nonce: number;
    if (!decoded.time) {
      throw new Web3TokenParsingError("Invalid time");
    } else {
      time = new Date(decoded.time);
    }
    if (!decoded.nonce) {
      throw new Web3TokenParsingError("Invalid nonce");
    } else {
      nonce = parseInt(decoded.nonce);
    }
    return {
      time,
      nonce,
    };
  } catch (e) {
    throw new Web3TokenParsingError("Invalid token: " + e.message);
  }
};

export class Web3TokenVerificationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Web3TokenVerificationError";
  }
}

/**
 * Check if the Web3Token is authentic.
 * Throw an error if it is not.
 * @param token the token to verify
 */
export const verifyWeb3Token = (token: Web3Token) => {
  const signatureAddress = verifyMessage(token.message, token.signature);
  if (signatureAddress !== token.signerAddress) {
    throw new Web3TokenVerificationError("Invalid token signer");
  }
  // Try to extract metadata
  extractWeb3TokenMetadata(token);
  // Todo: check if the token is not expired
};

export const encodeWeb3Token = (token: Web3Token): string => {
  const data = JSON.stringify(token);
  return Buffer.from(data, "binary").toString("base64");
};

export const decodeWeb3Token = (encoded: string): Web3Token => {
  const data = Buffer.from(encoded, "base64").toString("binary");
  return JSON.parse(data); // TODO validation
};
