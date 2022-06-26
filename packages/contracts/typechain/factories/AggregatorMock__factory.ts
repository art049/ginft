/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AggregatorMock,
  AggregatorMockInterface,
} from "../AggregatorMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "price_",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AGGREGATOR_VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161058938038061058983398101604081905261002f91610113565b60028390557fff0000000000000000000000000000000000000000000000000000000000000060f883901b16608052805161007190600090602084019061007a565b50505050610251565b82805461008690610200565b90600052602060002090601f0160209004810192826100a857600085556100ee565b82601f106100c157805160ff19168380011785556100ee565b828001600101855582156100ee579182015b828111156100ee5782518255916020019190600101906100d3565b506100fa9291506100fe565b5090565b5b808211156100fa57600081556001016100ff565b600080600060608486031215610127578283fd5b8351925060208085015160ff8116811461013f578384fd5b60408601519093506001600160401b038082111561015b578384fd5b818701915087601f83011261016e578384fd5b8151818111156101805761018061023b565b604051601f8201601f19908116603f011681019083821181831017156101a8576101a861023b565b816040528281528a868487010111156101bf578687fd5b8693505b828410156101e057848401860151818501870152928501926101c3565b828411156101f057868684830101525b8096505050505050509250925092565b600181811c9082168061021457607f821691505b6020821081141561023557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160f81c61031b61026e6000396000607e015261031b6000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806385a7c0701161005057806385a7c070146100d35780639a6fc8f5146100db578063feaf968c1461013f57600080fd5b8063313ce5671461007757806354fd4d50146100ad5780637284e416146100be575b600080fd5b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020015b60405180910390f35b60015b6040519081526020016100a4565b6100c661015d565b6040516100a49190610220565b6100b0600181565b6101086100e93660046101ef565b5060015460025469ffffffffffffffffffff9091169160009081908490565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100a4565b60015460025469ffffffffffffffffffff9091169060008083610108565b60606000805461016c90610291565b80601f016020809104026020016040519081016040528092919081815260200182805461019890610291565b80156101e55780601f106101ba576101008083540402835291602001916101e5565b820191906000526020600020905b8154815290600101906020018083116101c857829003601f168201915b5050505050905090565b600060208284031215610200578081fd5b813569ffffffffffffffffffff81168114610219578182fd5b9392505050565b6000602080835283518082850152825b8181101561024c57858101830151858201604001528201610230565b8181111561025d5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600181811c908216806102a557607f821691505b602082108114156102df577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea264697066735822122086b06a71a97a5a717e00644e9ce5ff398ce0bb5a46a4eafbe8237d6e957b1c1d64736f6c63430008040033";

export class AggregatorMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    price_: BigNumberish,
    decimals_: BigNumberish,
    description_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AggregatorMock> {
    return super.deploy(
      price_,
      decimals_,
      description_,
      overrides || {}
    ) as Promise<AggregatorMock>;
  }
  getDeployTransaction(
    price_: BigNumberish,
    decimals_: BigNumberish,
    description_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      price_,
      decimals_,
      description_,
      overrides || {}
    );
  }
  attach(address: string): AggregatorMock {
    return super.attach(address) as AggregatorMock;
  }
  connect(signer: Signer): AggregatorMock__factory {
    return super.connect(signer) as AggregatorMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AggregatorMockInterface {
    return new utils.Interface(_abi) as AggregatorMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AggregatorMock {
    return new Contract(address, _abi, signerOrProvider) as AggregatorMock;
  }
}
