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
import type { MintToken, MintTokenInterface } from "../MintToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "contract IVentureController",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "minters",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "mintedAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "partner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "partnerWeight",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "demos",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "demosWeight",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "MintTokenClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "claimMintToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimableMintTokenId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenWeight",
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
    name: "totalSupply",
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
    name: "totalWeight",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600f553480156200001657600080fd5b5060405162002a6538038062002a65833981016040819052620000399162000905565b886040516020016200004c919062000a05565b604051602081830303815290604052886040516020016200006e919062000a05565b60408051601f19818403018152919052815162000093906000906020850190620006f5565b508051620000a9906001906020840190620006f5565b505050620000c6620000c06200018d60201b60201c565b62000191565b600d80546001600160a01b0319166001600160a01b03891617905560005b86518110156200016557620001508782815181106200011357634e487b7160e01b600052603260045260246000fd5b60200260200101518783815181106200013c57634e487b7160e01b600052603260045260246000fd5b6020026020010151620001e360201b60201c565b806200015c8162000b2e565b915050620000e4565b50620001728484620001e3565b6200017e8282620001e3565b50505050505050505062000b91565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600f8054906000620001f58362000b2e565b9091555050600f546001600160a01b0383166000908152600e60209081526040808320849055928252600b9052908120829055600c80548392906200023c90849062000a89565b9091555050600f546200025190309062000255565b5050565b6001600160a01b038216620002b15760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b6000818152600260205260409020546001600160a01b031615620003185760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401620002a8565b6200032660008383620003af565b6001600160a01b03821660009081526003602052604081208054600192906200035190849062000a89565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b620003c78383836200046560201b6200066c1760201c565b6001600160a01b03831662000425576200041f81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6200044b565b816001600160a01b0316836001600160a01b0316146200044b576200044b838262000490565b6001600160a01b0382166200046a5762000465816200053d565b505050565b826001600160a01b0316826001600160a01b03161462000465576200046582826200061b565b60006001620004aa846200066c60201b62000aa41760201c565b620004b6919062000aa4565b6000838152600760205260409020549091508082146200050a576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090620005519060019062000aa4565b600083815260096020526040812054600880549394509092849081106200058857634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508060088381548110620005b857634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480620005ff57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600062000633836200066c60201b62000aa41760201c565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b60006001600160a01b038216620006d95760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401620002a8565b506001600160a01b031660009081526003602052604090205490565b828054620007039062000af1565b90600052602060002090601f01602090048101928262000727576000855562000772565b82601f106200074257805160ff191683800117855562000772565b8280016001018555821562000772579182015b828111156200077257825182559160200191906001019062000755565b506200078092915062000784565b5090565b5b8082111562000780576000815560010162000785565b8051620007a88162000b78565b919050565b600082601f830112620007be578081fd5b81516020620007d7620007d18362000a63565b62000a30565b80838252828201915082860187848660051b8901011115620007f7578586fd5b855b85811015620008225781516200080f8162000b78565b84529284019290840190600101620007f9565b5090979650505050505050565b600082601f83011262000840578081fd5b8151602062000853620007d18362000a63565b80838252828201915082860187848660051b890101111562000873578586fd5b855b85811015620008225781518452928401929084019060010162000875565b600082601f830112620008a4578081fd5b81516001600160401b03811115620008c057620008c062000b62565b620008d5601f8201601f191660200162000a30565b818152846020838601011115620008ea578283fd5b620008fd82602083016020870162000abe565b949350505050565b60008060008060008060008060006101208a8c03121562000924578485fd5b89516001600160401b03808211156200093b578687fd5b620009498d838e0162000893565b9a5060208c01519150808211156200095f578687fd5b6200096d8d838e0162000893565b99506200097d60408d016200079b565b985060608c015191508082111562000993578687fd5b620009a18d838e01620007ad565b975060808c0151915080821115620009b7578687fd5b50620009c68c828d016200082f565b955050620009d760a08b016200079b565b935060c08a01519250620009ee60e08b016200079b565b91506101008a015190509295985092959850929598565b606d60f81b81526000825162000a2381600185016020870162000abe565b9190910160010192915050565b604051601f8201601f191681016001600160401b038111828210171562000a5b5762000a5b62000b62565b604052919050565b60006001600160401b0382111562000a7f5762000a7f62000b62565b5060051b60200190565b6000821982111562000a9f5762000a9f62000b4c565b500190565b60008282101562000ab95762000ab962000b4c565b500390565b60005b8381101562000adb57818101518382015260200162000ac1565b8381111562000aeb576000848401525b50505050565b600181811c9082168062000b0657607f821691505b6020821081141562000b2857634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562000b455762000b4562000b4c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000b8e57600080fd5b50565b611ec48062000ba16000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063b88d4fde1161008c578063e985e9c511610066578063e985e9c51461032e578063ee63f7b31461036a578063f2fde38b1461039357600080fd5b8063b88d4fde146102f5578063c19d7ab314610308578063c87b56dd1461031b57600080fd5b806395d89b41116100bd57806395d89b41146102d257806396c82e57146102da578063a22cb465146102e257600080fd5b806370a08231146102a6578063715018a6146102b95780638da5cb5b146102c157600080fd5b80632f745c59116101455780634f6ccce71161011f5780634f6ccce7146102785780635618f47a1461028b5780636352211e1461029357600080fd5b80632f745c591461023f57806342842e0e146102525780634f558e791461026557600080fd5b8063095ea7b311610176578063095ea7b31461020557806318160ddd1461021a57806323b872dd1461022c57600080fd5b806301ffc9a71461019d57806306fdde03146101c5578063081812fc146101da575b600080fd5b6101b06101ab366004611c1f565b6103a6565b60405190151581526020015b60405180910390f35b6101cd610402565b6040516101bc9190611d06565b6101ed6101e8366004611c57565b610494565b6040516001600160a01b0390911681526020016101bc565b610218610213366004611bda565b61053f565b005b6008545b6040519081526020016101bc565b61021861023a366004611a94565b610671565b61021e61024d366004611bda565b6106f8565b610218610260366004611a94565b6107a0565b6101b0610273366004611c57565b6107bb565b61021e610286366004611c57565b6107da565b61021e61088c565b6101ed6102a1366004611c57565b610a19565b61021e6102b4366004611a48565b610aa4565b610218610b3e565b600a546001600160a01b03166101ed565b6101cd610ba4565b600c5461021e565b6102186102f0366004611ba4565b610bb3565b610218610303366004611acf565b610bc2565b61021e610316366004611c57565b610c50565b6101cd610329366004611c57565b610cc7565b6101b061033c366004611a62565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61021e610378366004611a48565b6001600160a01b03166000908152600e602052604090205490565b6102186103a1366004611a48565b610dbd565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d630000000000000000000000000000000000000000000000000000000014806103fc57506103fc82610e9f565b92915050565b60606000805461041190611d88565b80601f016020809104026020016040519081016040528092919081815260200182805461043d90611d88565b801561048a5780601f1061045f5761010080835404028352916020019161048a565b820191906000526020600020905b81548152906001019060200180831161046d57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105235760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061054a82610a19565b9050806001600160a01b0316836001600160a01b031614156105d45760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161051a565b336001600160a01b03821614806105f057506105f0813361033c565b6106625760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161051a565b61066c8383610f82565b505050565b61067b3382610ffd565b6106ed5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161051a565b61066c838383611105565b600061070383610aa4565b82106107775760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161051a565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61066c83838360405180602001604052806000815250610bc2565b6000818152600260205260408120546001600160a01b031615156103fc565b60006107e560085490565b82106108595760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161051a565b6008828154811061087a57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b600d54604080517ff470bb2c00000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163f470bb2c916004808301926020929190829003018186803b1580156108ea57600080fd5b505afa1580156108fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109229190611c03565b61096e5760405162461bcd60e51b815260206004820152601560248201527f4e6f7468696e6720636c61696d61626c65207965740000000000000000000000604482015260640161051a565b336000908152600e6020526040902054806109cb5760405162461bcd60e51b815260206004820152601060248201527f4e6f7468696e6720746f20636c61696d00000000000000000000000000000000604482015260640161051a565b336000818152600e60205260408120556109e790309083611105565b604051819033907f8f8b04be94d18f6c25ea413a2c3864fd7615395f954803b1ee011129064f4beb90600090a3919050565b6000818152600260205260408120546001600160a01b0316806103fc5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161051a565b60006001600160a01b038216610b225760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161051a565b506001600160a01b031660009081526003602052604090205490565b600a546001600160a01b03163314610b985760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051a565b610ba260006112ea565b565b60606001805461041190611d88565b610bbe338383611349565b5050565b610bcc3383610ffd565b610c3e5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161051a565b610c4a84848484611436565b50505050565b6000818152600260205260408120546001600160a01b0316610cb45760405162461bcd60e51b815260206004820152601460248201527f546f6b656e20646f6573206e6f74206578697374000000000000000000000000604482015260640161051a565b506000908152600b602052604090205490565b6000818152600260205260409020546060906001600160a01b0316610d545760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161051a565b6000610d6b60408051602081019091526000815290565b90506000815111610d8b5760405180602001604052806000815250610db6565b80610d95846114bf565b604051602001610da6929190611c9b565b6040516020818303038152906040525b9392505050565b600a546001600160a01b03163314610e175760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051a565b6001600160a01b038116610e935760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161051a565b610e9c816112ea565b50565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480610f3257507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103fc57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146103fc565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610fc482610a19565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166110875760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161051a565b600061109283610a19565b9050806001600160a01b0316846001600160a01b031614806110cd5750836001600160a01b03166110c284610494565b6001600160a01b0316145b806110fd57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661111882610a19565b6001600160a01b0316146111945760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161051a565b6001600160a01b03821661120f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161051a565b61121a83838361160d565b611225600082610f82565b6001600160a01b038316600090815260036020526040812080546001929061124e908490611d45565b90915550506001600160a01b038216600090815260036020526040812080546001929061127c908490611d19565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156113ab5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161051a565b6001600160a01b0383811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611441848484611105565b61144d848484846116c5565b610c4a5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161051a565b6060816114ff57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611529578061151381611dc3565b91506115229050600a83611d31565b9150611503565b60008167ffffffffffffffff81111561155257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561157c576020820181803683370190505b5090505b84156110fd57611591600183611d45565b915061159e600a86611dfc565b6115a9906030611d19565b60f81b8183815181106115cc57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611606600a86611d31565b9450611580565b6001600160a01b0383166116685761166381600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b61168b565b816001600160a01b0316836001600160a01b03161461168b5761168b8382611872565b6001600160a01b0382166116a25761066c8161190f565b826001600160a01b0316826001600160a01b03161461066c5761066c82826119e8565b60006001600160a01b0384163b15611867576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290611722903390899088908890600401611cca565b602060405180830381600087803b15801561173c57600080fd5b505af192505050801561176c575060408051601f3d908101601f1916820190925261176991810190611c3b565b60015b61181c573d80801561179a576040519150601f19603f3d011682016040523d82523d6000602084013e61179f565b606091505b5080516118145760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161051a565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490506110fd565b506001949350505050565b6000600161187f84610aa4565b6118899190611d45565b6000838152600760205260409020549091508082146118dc576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061192190600190611d45565b6000838152600960205260408120546008805493945090928490811061195757634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050806008838154811061198657634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806119cc57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b60006119f383610aa4565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b80356001600160a01b0381168114611a4357600080fd5b919050565b600060208284031215611a59578081fd5b610db682611a2c565b60008060408385031215611a74578081fd5b611a7d83611a2c565b9150611a8b60208401611a2c565b90509250929050565b600080600060608486031215611aa8578081fd5b611ab184611a2c565b9250611abf60208501611a2c565b9150604084013590509250925092565b60008060008060808587031215611ae4578081fd5b611aed85611a2c565b9350611afb60208601611a2c565b925060408501359150606085013567ffffffffffffffff80821115611b1e578283fd5b818701915087601f830112611b31578283fd5b813581811115611b4357611b43611e3c565b604051601f8201601f19908116603f01168101908382118183101715611b6b57611b6b611e3c565b816040528281528a6020848701011115611b83578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611bb6578182fd5b611bbf83611a2c565b91506020830135611bcf81611e52565b809150509250929050565b60008060408385031215611bec578182fd5b611bf583611a2c565b946020939093013593505050565b600060208284031215611c14578081fd5b8151610db681611e52565b600060208284031215611c30578081fd5b8135610db681611e60565b600060208284031215611c4c578081fd5b8151610db681611e60565b600060208284031215611c68578081fd5b5035919050565b60008151808452611c87816020860160208601611d5c565b601f01601f19169290920160200192915050565b60008351611cad818460208801611d5c565b835190830190611cc1818360208801611d5c565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611cfc6080830184611c6f565b9695505050505050565b602081526000610db66020830184611c6f565b60008219821115611d2c57611d2c611e10565b500190565b600082611d4057611d40611e26565b500490565b600082821015611d5757611d57611e10565b500390565b60005b83811015611d77578181015183820152602001611d5f565b83811115610c4a5750506000910152565b600181811c90821680611d9c57607f821691505b60208210811415611dbd57634e487b7160e01b600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611df557611df5611e10565b5060010190565b600082611e0b57611e0b611e26565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114610e9c57600080fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610e9c57600080fdfea264697066735822122019c48b83c964af6af430de71063ec7f698df5c5fafebd0f82b2ad64fff76ce5b64736f6c63430008040033";

export class MintToken__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    _controller: string,
    minters: string[],
    mintedAmounts: BigNumberish[],
    partner: string,
    partnerWeight: BigNumberish,
    demos: string,
    demosWeight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MintToken> {
    return super.deploy(
      name_,
      symbol_,
      _controller,
      minters,
      mintedAmounts,
      partner,
      partnerWeight,
      demos,
      demosWeight,
      overrides || {}
    ) as Promise<MintToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    _controller: string,
    minters: string[],
    mintedAmounts: BigNumberish[],
    partner: string,
    partnerWeight: BigNumberish,
    demos: string,
    demosWeight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      _controller,
      minters,
      mintedAmounts,
      partner,
      partnerWeight,
      demos,
      demosWeight,
      overrides || {}
    );
  }
  attach(address: string): MintToken {
    return super.attach(address) as MintToken;
  }
  connect(signer: Signer): MintToken__factory {
    return super.connect(signer) as MintToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintTokenInterface {
    return new utils.Interface(_abi) as MintTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintToken {
    return new Contract(address, _abi, signerOrProvider) as MintToken;
  }
}
