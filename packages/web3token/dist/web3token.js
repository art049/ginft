"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeWeb3Token = exports.encodeWeb3Token = exports.verifyWeb3Token = exports.Web3TokenVerificationError = exports.extractWeb3TokenMetadata = exports.Web3TokenParsingError = exports.requestWeb3Token = void 0;
const utils_1 = require("ethers/lib/utils");
const yaml_1 = require("yaml");
const welcomeMessage = "Welcome to Demos Ventures !\n" +
    "To avoid spam and to authenticate you, please sign this message.";
const generateMessage = (time, nonce) => `${welcomeMessage}
---
time: ${time.toISOString()}
nonce: ${nonce}
`;
const requestWeb3Token = (signer) => __awaiter(void 0, void 0, void 0, function* () {
    const time = new Date();
    const nonce = Math.floor(Math.random() * 100000);
    const message = generateMessage(time, nonce);
    const signature = yield signer.signMessage(message);
    return {
        message,
        signature,
        signerAddress: yield signer.getAddress(),
    };
});
exports.requestWeb3Token = requestWeb3Token;
class Web3TokenParsingError extends Error {
    constructor(message) {
        super(message);
        this.name = "Web3TokenParsingError";
    }
}
exports.Web3TokenParsingError = Web3TokenParsingError;
const extractWeb3TokenMetadata = (rawToken) => {
    try {
        const [message, rawMetadata] = rawToken.message.split("\n---\n");
        if (message.localeCompare(welcomeMessage) !== 0) {
            throw new Web3TokenParsingError("Message is not the expected one.");
        }
        const decoded = (0, yaml_1.parse)(rawMetadata);
        let time;
        let nonce;
        if (!decoded.time) {
            throw new Web3TokenParsingError("Invalid time");
        }
        else {
            time = new Date(decoded.time);
        }
        if (!decoded.nonce) {
            throw new Web3TokenParsingError("Invalid nonce");
        }
        else {
            nonce = parseInt(decoded.nonce);
        }
        return {
            time,
            nonce,
        };
    }
    catch (e) {
        throw new Web3TokenParsingError("Invalid token: " + e.message);
    }
};
exports.extractWeb3TokenMetadata = extractWeb3TokenMetadata;
class Web3TokenVerificationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Web3TokenVerificationError";
    }
}
exports.Web3TokenVerificationError = Web3TokenVerificationError;
/**
 * Check if the Web3Token is authentic.
 * Throw an error if it is not.
 * @param token the token to verify
 */
const verifyWeb3Token = (token) => {
    const signatureAddress = (0, utils_1.verifyMessage)(token.message, token.signature);
    if (signatureAddress !== token.signerAddress) {
        throw new Web3TokenVerificationError("Invalid token signer");
    }
    // Try to extract metadata
    (0, exports.extractWeb3TokenMetadata)(token);
    // Todo: check if the token is not expired
};
exports.verifyWeb3Token = verifyWeb3Token;
const encodeWeb3Token = (token) => {
    const data = JSON.stringify(token);
    return Buffer.from(data, "binary").toString("base64");
};
exports.encodeWeb3Token = encodeWeb3Token;
const decodeWeb3Token = (encoded) => {
    const data = Buffer.from(encoded, "base64").toString("binary");
    return JSON.parse(data); // TODO validation
};
exports.decodeWeb3Token = decodeWeb3Token;
