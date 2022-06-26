import { Signer } from "ethers";
export interface Web3Token {
    signature: string;
    message: string;
    signerAddress: string;
}
export interface Web3TokenMetadata {
    time: Date;
    nonce: number;
}
export declare const requestWeb3Token: (signer: Signer) => Promise<Web3Token>;
export declare class Web3TokenParsingError extends Error {
    constructor(message: any);
}
export declare const extractWeb3TokenMetadata: (rawToken: Web3Token) => Web3TokenMetadata;
export declare class Web3TokenVerificationError extends Error {
    constructor(message: any);
}
/**
 * Check if the Web3Token is authentic.
 * Throw an error if it is not.
 * @param token the token to verify
 */
export declare const verifyWeb3Token: (token: Web3Token) => void;
export declare const encodeWeb3Token: (token: Web3Token) => string;
export declare const decodeWeb3Token: (encoded: string) => Web3Token;
