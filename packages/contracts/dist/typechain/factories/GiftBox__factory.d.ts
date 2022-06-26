import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GiftBox, GiftBoxInterface } from "../GiftBox";
export declare class GiftBox__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GiftBox>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GiftBox;
    connect(signer: Signer): GiftBox__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604080518082018252600781526608ed2cce884def60cb1b60208083019182528351808501909452600384526211d19560ea1b9084015281519192916200005c916000916200007b565b508051620000729060019060208401906200007b565b5050506200015e565b828054620000899062000121565b90600052602060002090601f016020900481019282620000ad5760008555620000f8565b82601f10620000c857805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f8578251825591602001919060010190620000db565b50620001069291506200010a565b5090565b5b808211156200010657600081556001016200010b565b600181811c908216806200013657607f821691505b602082108114156200015857634e487b7160e01b600052602260045260246000fd5b50919050565b611d3e806200016e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610272578063bfe370d914610285578063c87b56dd14610298578063d0def521146102ab578063e985e9c5146102be57600080fd5b80636352211e1461021e57806370a082311461023157806395d89b4114610244578063972157301461024c578063a22cb4651461025f57600080fd5b8063095ea7b3116100f4578063095ea7b3146101a3578063150b7a02146101b657806318160ddd146101e257806323b872dd146101f857806342842e0e1461020b57600080fd5b806301ffc9a71461012657806306c19e3f1461014e57806306fdde0314610163578063081812fc14610178575b600080fd5b6101396101343660046119b6565b6102fa565b60405190151581526020015b60405180910390f35b61016161015c366004611a46565b61034c565b005b61016b610593565b6040516101459190611aff565b61018b610186366004611a2e565b610625565b6040516001600160a01b039091168152602001610145565b6101616101b136600461198d565b6106ad565b6101c96101c436600461180e565b6107c3565b6040516001600160e01b03199091168152602001610145565b6101ea610849565b604051908152602001610145565b6101616102063660046117d3565b610859565b6101616102193660046117d3565b61088a565b61018b61022c366004611a2e565b6108a5565b6101ea61023f366004611787565b61091c565b61016b6109a3565b61016161025a36600461198d565b6109b2565b61016161026d3660046118f4565b610a7f565b61016161028036600461187b565b610a8e565b6101ea6102933660046119ee565b610ac6565b61016b6102a6366004611a2e565b610b31565b6101ea6102b936600461192e565b610ca8565b6101396102cc3660046117a1565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061032b57506001600160e01b03198216635b5e139f60e01b145b8061034657506301ffc9a760e01b6001600160e01b03198316145b92915050565b610355826108a5565b6001600160a01b0316336001600160a01b0316146103ba5760405162461bcd60e51b815260206004820152601760248201527f596f7520646f6e2774206f776e2074686973206769667400000000000000000060448201526064015b60405180910390fd5b60008281526009602052604090205460ff16156104195760405162461bcd60e51b815260206004820181905260248201527f54686520676966742068617320616c7265616479206265656e206f70656e656460448201526064016103b1565b604080516020810184905290810182905260009060600160408051808303601f1901815282825280516020918201206000818152600d8352839020848401845280546001600160a01b03168086526001909101549285018390529251632142170760e11b8152306004820152336024820152604481019290925293506342842e0e90606401600060405180830381600087803b1580156104b857600080fd5b505af11580156104cc573d6000803e3d6000fd5b5050506000858152600960209081526040808320805460ff19166001908117909155868452600d835281842080546001600160a01b03199081168255910184905585516001600160a01b03168452600c83528184208684018051865293529281902080549093169092558351905191517fbd5876f1603cf056a241a695032e6cfada94bc4a4223d338b934401935591dc39350610585928892919283526001600160a01b03919091166020830152604082015260600190565b60405180910390a150505050565b6060600080546105a290611c43565b80601f01602080910402602001604051908101604052809291908181526020018280546105ce90611c43565b801561061b5780601f106105f05761010080835404028352916020019161061b565b820191906000526020600020905b8154815290600101906020018083116105fe57829003601f168201915b5050505050905090565b600061063082610d46565b6106915760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103b1565b506000908152600460205260409020546001600160a01b031690565b60006106b8826108a5565b9050806001600160a01b0316836001600160a01b031614156107265760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103b1565b336001600160a01b0382161480610742575061074281336102cc565b6107b45760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103b1565b6107be8383610d63565b505050565b6000806107d08484610ac6565b336000818152600c602090815260408083208a8452825280832080546001600160a01b03808e166001600160a01b031992831617909255825180840184529586528584018c8152968552600d9093529220925183549216911617815590516001919091015550630a85bd0160e11b905095945050505050565b600061085460075490565b905090565b6108633382610dd1565b61087f5760405162461bcd60e51b81526004016103b190611b64565b6107be838383610eba565b6107be83838360405180602001604052806000815250610a8e565b6000818152600260205260408120546001600160a01b0316806103465760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103b1565b60006001600160a01b0382166109875760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103b1565b506001600160a01b031660009081526003602052604090205490565b6060600180546105a290611c43565b6001600160a01b038083166000908152600c60209081526040808320858452909152902054163381146109e457600080fd5b604051632142170760e11b8152306004820152336024820152604481018390526001600160a01b038416906342842e0e90606401600060405180830381600087803b158015610a3257600080fd5b505af1158015610a46573d6000803e3d6000fd5b505050506001600160a01b03929092166000908152600c602090815260408083209383529290522080546001600160a01b031916905550565b610a8a338383611056565b5050565b610a983383610dd1565b610ab45760405162461bcd60e51b81526004016103b190611b64565b610ac084848484611125565b50505050565b60008060005b6020811015610b2957610ae0816008611be1565b858583818110610b0057634e487b7160e01b600052603260045260246000fd5b909101356001600160f81b03191690911c92909217915080610b2181611c7e565b915050610acc565b509392505050565b6060610b3c82610d46565b610ba25760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016103b1565b60008281526006602052604081208054610bbb90611c43565b80601f0160208091040260200160405190810160405280929190818152602001828054610be790611c43565b8015610c345780601f10610c0957610100808354040283529160200191610c34565b820191906000526020600020905b815481529060010190602001808311610c1757829003601f168201915b505050505090506000610c5260408051602081019091526000815290565b9050805160001415610c65575092915050565b815115610c97578082604051602001610c7f929190611a93565b60405160208183030381529060405292505050919050565b610ca084611158565b949350505050565b600080610cb460075490565b9050610cc08482611230565b610cca8184611363565b600081815260086020526040902080546001600160a01b03191633179055610cf6600780546001019055565b604080513381526001600160a01b03861660208201529081018290527fff532e515ce1ce566dbede1bfd8b8a23a94d47c9a171c0a4f97fac436bdd8e0c9060600160405180910390a19392505050565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d98826108a5565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610ddc82610d46565b610e3d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103b1565b6000610e48836108a5565b9050806001600160a01b0316846001600160a01b03161480610e8f57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610ca05750836001600160a01b0316610ea884610625565b6001600160a01b031614949350505050565b826001600160a01b0316610ecd826108a5565b6001600160a01b031614610f315760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103b1565b6001600160a01b038216610f935760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103b1565b610f9e600082610d63565b6001600160a01b0383166000908152600360205260408120805460019290610fc7908490611c00565b90915550506001600160a01b0382166000908152600360205260408120805460019290610ff5908490611bb5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031614156110b85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103b1565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611130848484610eba565b61113c848484846113ee565b610ac05760405162461bcd60e51b81526004016103b190611b12565b606061116382610d46565b6111c75760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103b1565b60006111de60408051602081019091526000815290565b905060008151116111fe5760405180602001604052806000815250611229565b80611208846114fb565b604051602001611219929190611a93565b6040516020818303038152906040525b9392505050565b6001600160a01b0382166112865760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103b1565b61128f81610d46565b156112dc5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103b1565b6001600160a01b0382166000908152600360205260408120805460019290611305908490611bb5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b61136c82610d46565b6113cf5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016103b1565b600082815260066020908152604090912082516107be92840190611615565b60006001600160a01b0384163b156114f057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611432903390899088908890600401611ac2565b602060405180830381600087803b15801561144c57600080fd5b505af192505050801561147c575060408051601f3d908101601f19168201909252611479918101906119d2565b60015b6114d6573d8080156114aa576040519150601f19603f3d011682016040523d82523d6000602084013e6114af565b606091505b5080516114ce5760405162461bcd60e51b81526004016103b190611b12565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ca0565b506001949350505050565b60608161151f5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611549578061153381611c7e565b91506115429050600a83611bcd565b9150611523565b60008167ffffffffffffffff81111561157257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561159c576020820181803683370190505b5090505b8415610ca0576115b1600183611c00565b91506115be600a86611c99565b6115c9906030611bb5565b60f81b8183815181106115ec57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061160e600a86611bcd565b94506115a0565b82805461162190611c43565b90600052602060002090601f0160209004810192826116435760008555611689565b82601f1061165c57805160ff1916838001178555611689565b82800160010185558215611689579182015b8281111561168957825182559160200191906001019061166e565b50611695929150611699565b5090565b5b80821115611695576000815560010161169a565b600067ffffffffffffffff808411156116c9576116c9611cd9565b604051601f8501601f19908116603f011681019082821181831017156116f1576116f1611cd9565b8160405280935085815286868601111561170a57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461173b57600080fd5b919050565b60008083601f840112611751578182fd5b50813567ffffffffffffffff811115611768578182fd5b60208301915083602082850101111561178057600080fd5b9250929050565b600060208284031215611798578081fd5b61122982611724565b600080604083850312156117b3578081fd5b6117bc83611724565b91506117ca60208401611724565b90509250929050565b6000806000606084860312156117e7578081fd5b6117f084611724565b92506117fe60208501611724565b9150604084013590509250925092565b600080600080600060808688031215611825578081fd5b61182e86611724565b945061183c60208701611724565b935060408601359250606086013567ffffffffffffffff81111561185e578182fd5b61186a88828901611740565b969995985093965092949392505050565b60008060008060808587031215611890578384fd5b61189985611724565b93506118a760208601611724565b925060408501359150606085013567ffffffffffffffff8111156118c9578182fd5b8501601f810187136118d9578182fd5b6118e8878235602084016116ae565b91505092959194509250565b60008060408385031215611906578182fd5b61190f83611724565b915060208301358015158114611923578182fd5b809150509250929050565b60008060408385031215611940578182fd5b61194983611724565b9150602083013567ffffffffffffffff811115611964578182fd5b8301601f81018513611974578182fd5b611983858235602084016116ae565b9150509250929050565b6000806040838503121561199f578182fd5b6119a883611724565b946020939093013593505050565b6000602082840312156119c7578081fd5b813561122981611cef565b6000602082840312156119e3578081fd5b815161122981611cef565b60008060208385031215611a00578182fd5b823567ffffffffffffffff811115611a16578283fd5b611a2285828601611740565b90969095509350505050565b600060208284031215611a3f578081fd5b5035919050565b60008060408385031215611a58578182fd5b50508035926020909101359150565b60008151808452611a7f816020860160208601611c17565b601f01601f19169290920160200192915050565b60008351611aa5818460208801611c17565b835190830190611ab9818360208801611c17565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611af590830184611a67565b9695505050505050565b6020815260006112296020830184611a67565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611bc857611bc8611cad565b500190565b600082611bdc57611bdc611cc3565b500490565b6000816000190483118215151615611bfb57611bfb611cad565b500290565b600082821015611c1257611c12611cad565b500390565b60005b83811015611c32578181015183820152602001611c1a565b83811115610ac05750506000910152565b600181811c90821680611c5757607f821691505b60208210811415611c7857634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611c9257611c92611cad565b5060010190565b600082611ca857611ca8611cc3565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611d0557600080fd5b5056fea2646970667358221220dc4ff3cc15d80aa9176f61bcb726f03fdf76ba473a8d23df1081ce116c23f59164736f6c63430008040033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): GiftBoxInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GiftBox;
}
