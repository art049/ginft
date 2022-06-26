import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRandomNumberProvider, IRandomNumberProviderInterface } from "../IRandomNumberProvider";
export declare class IRandomNumberProvider__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IRandomNumberProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRandomNumberProvider;
}
