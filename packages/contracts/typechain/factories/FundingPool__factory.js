"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_asset",
                type: "address",
            },
        ],
        name: "AssetDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_aggregator",
                type: "address",
            },
        ],
        name: "AssetEnabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Deposit",
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
                indexed: false,
                internalType: "address",
                name: "controller",
                type: "address",
            },
        ],
        name: "VentureAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Withdrawal",
        type: "event",
    },
    {
        inputs: [],
        name: "ENTRY_FEE_PERCENTAGE",
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
                name: "ventureController",
                type: "address",
            },
        ],
        name: "addVentureController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
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
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
        ],
        name: "depositBalance",
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
        name: "depositors",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
        ],
        name: "disableAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "priceFeed",
                type: "address",
            },
        ],
        name: "enableAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "ventureController",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "priceFeed",
                        type: "address",
                    },
                ],
                internalType: "struct PriceConsumer.Asset[]",
                name: "assets",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256[]",
                        name: "assetAmountToWithdraw",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint256[]",
                        name: "fundingPerMinterPerAsset",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint256[]",
                        name: "fundingPerMinter",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint256",
                        name: "globalFunding",
                        type: "uint256",
                    },
                ],
                internalType: "struct Funding.Allocation",
                name: "allocation",
                type: "tuple",
            },
            {
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "fundVentureController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getEnabledAssets",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "priceFeed",
                        type: "address",
                    },
                ],
                internalType: "struct PriceConsumer.Asset[]",
                name: "assets",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
        ],
        name: "isAssetEnabled",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "ventureControllers",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052600a805534801561001457600080fd5b5061001e33610023565b610073565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611887806100826000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063aaa4668811610066578063aaa46688146101e5578063df6d0467146101fa578063f2fde38b14610202578063f3fef3a31461021557600080fd5b8063715018a61461019c5780638c58372c146101a45780638da5cb5b146101b75780639edd0754146101d257600080fd5b80631b368875116100d35780631b368875146101585780633b1270881461016157806347e7ef2414610176578063708075281461018957600080fd5b80630e7ae6a2146100fa578063114cb92f14610120578063160e79e214610143575b600080fd5b61010d610108366004611456565b610228565b6040519081526020015b60405180910390f35b61013361012e36600461143c565b610255565b6040519015158152602001610117565b61015661015136600461143c565b610262565b005b61010d600a5481565b610169610357565b6040516101179190611685565b6101566101843660046115bb565b61055d565b61015661019736600461143c565b610817565b610156610924565b6101566101b2366004611488565b61098a565b6000546040516001600160a01b039091168152602001610117565b6101566101e0366004611456565b610c36565b6101ed610d4b565b6040516101179190611638565b6101ed610d5c565b61015661021036600461143c565b610d68565b6101566102233660046115bb565b610e4a565b6001600160a01b038083166000908152600760209081526040808320938516835292905220545b92915050565b600061024f60018361102f565b6000546001600160a01b031633146102c15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6102cc600882611054565b6103185760405162461bcd60e51b815260206004820152601f60248201527f56656e74757265436f6e74726f6c6c657220616c72656164792061646465640060448201526064016102b8565b6040516001600160a01b03821681527fb33583ea6a9eb6353802791984145874ffb2a537e22db6ec9870ab1e6752d9909060200160405180910390a150565b606060006103656001611069565b9050805167ffffffffffffffff81111561038f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156103da57816020015b60408051606081018252600080825260208083018290529282015282526000199092019101816103ad5790505b50915060005b815181101561055857604051806060016040528083838151811061041457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316815260200183838151811061044a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c2919061161c565b60ff168152602001600360008585815181106104ee57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b0390811683529082019290925260400160002054169052835184908390811061053a57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610550906117fb565b9150506103e0565b505090565b61056682610255565b6105b25760405162461bcd60e51b815260206004820152601460248201527f4173736574206973206e6f7420616c6c6f77656400000000000000000000000060448201526064016102b8565b600081116106025760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016102b8565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201526000906001600160a01b0384169063dd62ed3e9060440160206040518083038186803b15801561066357600080fd5b505afa158015610677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b9190611604565b9050818110156106ed5760405162461bcd60e51b815260206004820152601b60248201527f416c6c6f77616e6365206973206e6f742073756666696369656e74000000000060448201526064016102b8565b3360009081526007602090815260408083206001600160a01b0387168452909152812080548492906107209084906117ad565b909155506107319050600533611054565b506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390526001600160a01b038416906323b872dd90606401602060405180830381600087803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d191906115e4565b5060405182815233906001600160a01b038516907f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f629060200160405180910390a3505050565b6000546001600160a01b031633146108715760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b8565b61087c600182611076565b6108c85760405162461bcd60e51b815260206004820152601660248201527f417373657420616c72656164792064697361626c65640000000000000000000060448201526064016102b8565b6001600160a01b038116600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169055517ffc9274ad64ab0a7d8dedd8c9297fb4e25d7a17eb057457c6bcf2a8f13dc8859c9190a250565b6000546001600160a01b0316331461097e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b8565b610988600061108b565b565b6001600160a01b038416331461099f57600080fd5b6109aa60088561102f565b6109f65760405162461bcd60e51b815260206004820152601d60248201527f56656e74757265436f6e74726f6c6c6572206e6f7420616c6c6f77656400000060448201526064016102b8565b60005b8151811015610b255760005b8451811015610b1257836020015181865184610a2191906117c5565b610a2b91906117ad565b81518110610a4957634e487b7160e01b600052603260045260246000fd5b602002602001015160076000858581518110610a7557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000878481518110610abf57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b03166001600160a01b031681526020019081526020016000206000828254610afa91906117e4565b90915550819050610b0a816117fb565b915050610a05565b5080610b1d816117fb565b9150506109f9565b5060005b8351811015610c2f57838181518110610b5257634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b031663a9059cbb8685600001518481518110610b9157634e487b7160e01b600052603260045260246000fd5b60200260200101516040518363ffffffff1660e01b8152600401610bca9291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610be457600080fd5b505af1158015610bf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c91906115e4565b5080610c27816117fb565b915050610b29565b5050505050565b6000546001600160a01b03163314610c905760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b8565b610c9b600183611054565b610ce75760405162461bcd60e51b815260206004820152601560248201527f417373657420616c726561647920656e61626c6564000000000000000000000060448201526064016102b8565b6001600160a01b03828116600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169486169485179055517f573cdc79fc9f5f5f34a9dd4c0e36c27cef2329ac569cc1e851e22b91adfdea799190a35050565b6060610d576005611069565b905090565b6060610d576008611069565b6000546001600160a01b03163314610dc25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b8565b6001600160a01b038116610e3e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102b8565b610e478161108b565b50565b60008111610e9a5760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016102b8565b610ea43383610228565b811115610f195760405162461bcd60e51b815260206004820152603060248201527f416d6f756e74206d757374206265206c657373207468616e206f72206571756160448201527f6c20746f20746865206465706f7369740000000000000000000000000000000060648201526084016102b8565b3360009081526007602090815260408083206001600160a01b038616845290915281208054839290610f4c9084906117e4565b90915550506040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290526001600160a01b0383169063a9059cbb90604401602060405180830381600087803b158015610fb257600080fd5b505af1158015610fc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fea91906115e4565b5060405181815233906001600160a01b038416907f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63989060200160405180910390a35050565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b600061104d836001600160a01b0384166110e8565b6060600061104d83611137565b600061104d836001600160a01b038416611193565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600081815260018301602052604081205461112f5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561024f565b50600061024f565b60608160000180548060200260200160405190810160405280929190818152602001828054801561118757602002820191906000526020600020905b815481526020019060010190808311611173575b50505050509050919050565b600081815260018301602052604081205480156112a65760006111b76001836117e4565b85549091506000906111cb906001906117e4565b905081811461124c5760008660000182815481106111f957634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061122a57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061126b57634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061024f565b600091505061024f565b80356001600160a01b03811681146112c757600080fd5b919050565b600082601f8301126112dc578081fd5b813560206112f16112ec83611789565b61173a565b80838252828201915082860187848660051b8901011115611310578586fd5b855b8581101561133557611323826112b0565b84529284019290840190600101611312565b5090979650505050505050565b600082601f830112611352578081fd5b813560206113626112ec83611789565b80838252828201915082860187848660051b8901011115611381578586fd5b855b8581101561133557813584529284019290840190600101611383565b6000608082840312156113b0578081fd5b6113b86116ee565b9050813567ffffffffffffffff808211156113d257600080fd5b6113de85838601611342565b835260208401359150808211156113f457600080fd5b61140085838601611342565b6020840152604084013591508082111561141957600080fd5b5061142684828501611342565b6040830152506060820135606082015292915050565b60006020828403121561144d578081fd5b61104d826112b0565b60008060408385031215611468578081fd5b611471836112b0565b915061147f602084016112b0565b90509250929050565b6000806000806080858703121561149d578182fd5b6114a6856112b0565b935060208086013567ffffffffffffffff808211156114c3578485fd5b818801915088601f8301126114d6578485fd5b81356114e46112ec82611789565b818152848101908486016060808502870188018e101561150257898afd5b8996505b848710156115675780828f03121561151c57898afd5b611524611717565b61152d836112b0565b81528883013561153c81611842565b818a0152604061154d8482016112b0565b908201528452600196909601959287019290810190611506565b829a5060408d013597508588111561157d57898afd5b6115898e898f0161139f565b99508c013596505050508184111590506115a1578384fd5b50506115af878288016112cc565b91505092959194509250565b600080604083850312156115cd578182fd5b6115d6836112b0565b946020939093013593505050565b6000602082840312156115f5578081fd5b8151801515811461104d578182fd5b600060208284031215611615578081fd5b5051919050565b60006020828403121561162d578081fd5b815161104d81611842565b6020808252825182820181905260009190848201906040850190845b818110156116795783516001600160a01b031683529284019291840191600101611654565b50909695505050505050565b602080825282518282018190526000919060409081850190868401855b828110156116e157815180516001600160a01b0390811686528782015160ff1688870152908601511685850152606090930192908501906001016116a2565b5091979650505050505050565b6040516080810167ffffffffffffffff811182821017156117115761171161182c565b60405290565b6040516060810167ffffffffffffffff811182821017156117115761171161182c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117815761178161182c565b604052919050565b600067ffffffffffffffff8211156117a3576117a361182c565b5060051b60200190565b600082198211156117c0576117c0611816565b500190565b60008160001904831182151516156117df576117df611816565b500290565b6000828210156117f6576117f6611816565b500390565b600060001982141561180f5761180f611816565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60ff81168114610e4757600080fdfea2646970667358221220b916b004971309aa9fc99d831de1bb86817d49b9d964612a5791e4f2baec11c364736f6c63430008040033";
class FundingPool__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FundingPool__factory = FundingPool__factory;
FundingPool__factory.bytecode = _bytecode;
FundingPool__factory.abi = _abi;
