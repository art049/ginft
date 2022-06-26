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
