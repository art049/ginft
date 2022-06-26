import { BigNumber } from "ethers";

export interface NFTToWrap {
  contractAddress: string;
  tokenId: BigNumber;
}

export interface CustomizationData {
  recipient: string;
  name: string;
  message?: string;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  external_url: string;
}
