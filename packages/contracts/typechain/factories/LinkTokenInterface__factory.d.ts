import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LinkTokenInterface, LinkTokenInterfaceInterface } from "../LinkTokenInterface";
export declare class LinkTokenInterface__factory {
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
    static createInterface(): LinkTokenInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LinkTokenInterface;
}
