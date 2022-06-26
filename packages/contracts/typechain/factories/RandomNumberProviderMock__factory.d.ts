import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RandomNumberProviderMock, RandomNumberProviderMockInterface } from "../RandomNumberProviderMock";
export declare class RandomNumberProviderMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(seed: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RandomNumberProviderMock>;
    getDeployTransaction(seed: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RandomNumberProviderMock;
    connect(signer: Signer): RandomNumberProviderMock__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516102df3803806102df83398101604081905261002f91610037565b60805261004f565b600060208284031215610048578081fd5b5051919050565b60805161026f6100706000396000818160fe0152610151015261026f6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630bedf9c11461003b5780638678a7b214610060575b600080fd5b61004e6100493660046101a1565b610068565b60405190815260200160405180910390f35b61004e6100f4565b6000818152600160205260408120546100e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f526573756c74206e6f742066696c6c6564207965740000000000000000000000604482015260640160405180910390fd5b5060009081526001602052604090205490565b60008054610122907f00000000000000000000000000000000000000000000000000000000000000006101b9565b60405160200161013491815260200190565b6040516020818303038152906040528051906020012090506000547f000000000000000000000000000000000000000000000000000000000000000061017a91906101b9565b60008281526001602052604081209190915580549080610199836101d1565b919050555090565b6000602082840312156101b2578081fd5b5035919050565b600082198211156101cc576101cc61020a565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156102035761020361020a565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122049594c23d40d6b1069117fc5dab5ddc5cd77e0ff41264661891f715627ecbe4364736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    })[];
    static createInterface(): RandomNumberProviderMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RandomNumberProviderMock;
}
