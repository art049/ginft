import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VRFConsumerBase, VRFConsumerBaseInterface } from "../VRFConsumerBase";
export declare class VRFConsumerBase__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): VRFConsumerBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VRFConsumerBase;
}
