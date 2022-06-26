"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceConsumerMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
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
        name: "getNormalizedAssetPrices",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
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
        inputs: [
            {
                internalType: "address",
                name: "aggregatorAddress",
                type: "address",
            },
        ],
        name: "getPrice",
        outputs: [
            {
                components: [
                    {
                        internalType: "int256",
                        name: "price",
                        type: "int256",
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                    },
                ],
                internalType: "struct PriceConsumer.PriceInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610b8f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806341976e091461003b578063a4f9ac9814610071575b600080fd5b61004e6100493660046106f7565b610092565b604080518251815260209283015160ff1692810192909252015b60405180910390f35b61008461007f366004610718565b6100b5565b604051610068929190610871565b60408051808201909152600080825260208201526100af826100cb565b92915050565b606060006100c283610207565b91509150915091565b6040805180820190915260008082526020820152600082905060008173ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561012c57600080fd5b505afa158015610140573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101649190610806565b50505091505060008273ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156101b257600080fd5b505afa1580156101c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ea9190610855565b6040805180820190915292835260ff166020830152509392505050565b606060008083511161021857600080fd5b6000835167ffffffffffffffff81111561024257634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561026b578160200160208202803683370190505b5090506000845167ffffffffffffffff81111561029857634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156102dd57816020015b60408051808201909152600080825260208201528152602001906001900390816102b65790505b50905060005b855181101561035e5761032086828151811061030f57634e487b7160e01b600052603260045260246000fd5b6020026020010151604001516100cb565b82828151811061034057634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061035690610b00565b9150506102e3565b506103688161041f565b60005b85518110156103e5576103a882828151811061039757634e487b7160e01b600052603260045260246000fd5b60200260200101516000015161058d565b8382815181106103c857634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806103dd81610b00565b91505061036b565b50818160008151811061040857634e487b7160e01b600052603260045260246000fd5b602002602001015160200151935093505050915091565b6000805b82518110156104a6578160ff1683828151811061045057634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160ff1611156104945782818151811061048557634e487b7160e01b600052603260045260246000fd5b60200260200101516020015191505b8061049e81610b00565b915050610423565b5060005b82518110156105885760405180604001604052806105088584815181106104e157634e487b7160e01b600052603260045260246000fd5b602002602001015160200151856104f89190610add565b61050390600a61097a565b610602565b85848151811061052857634e487b7160e01b600052603260045260246000fd5b60200260200101516000015161053e9190610a25565b81526020018360ff1681525083828151811061056a57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061058090610b00565b9150506104aa565b505050565b6000808212156105fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064015b60405180910390fd5b5090565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8211156105fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e206160448201527f6e20696e7432353600000000000000000000000000000000000000000000000060648201526084016105f5565b803573ffffffffffffffffffffffffffffffffffffffff811681146106d857600080fd5b919050565b805169ffffffffffffffffffff811681146106d857600080fd5b600060208284031215610708578081fd5b610711826106b4565b9392505050565b6000602080838503121561072a578182fd5b823567ffffffffffffffff80821115610741578384fd5b818501915085601f830112610754578384fd5b81358181111561076657610766610b31565b610774848260051b016108e8565b81815284810192508385016060808402860187018a1015610793578788fd5b8795505b838610156107f85780828b0312156107ad578788fd5b6107b56108bf565b6107be836106b4565b8152878301356107cd81610b47565b8189015260406107de8482016106b4565b908201528552600195909501949386019390810190610797565b509098975050505050505050565b600080600080600060a0868803121561081d578081fd5b610826866106dd565b9450602086015193506040860151925060608601519150610849608087016106dd565b90509295509295909350565b600060208284031215610866578081fd5b815161071181610b47565b604080825283519082018190526000906020906060840190828701845b828110156108aa5781518452928401929084019060010161088e565b50505060ff9490941692019190915250919050565b6040516060810167ffffffffffffffff811182821017156108e2576108e2610b31565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561092f5761092f610b31565b604052919050565b600181815b8085111561097257816000190482111561095857610958610b1b565b8085161561096557918102915b93841c939080029061093c565b509250929050565b600061071160ff841683600082610993575060016100af565b816109a0575060006100af565b81600181146109b657600281146109c0576109dc565b60019150506100af565b60ff8411156109d1576109d1610b1b565b50506001821b6100af565b5060208310610133831016604e8410600b84101617156109ff575081810a6100af565b610a098383610937565b8060001904821115610a1d57610a1d610b1b565b029392505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81841382841385830485118282161615610a6457610a64610b1b565b7f800000000000000000000000000000000000000000000000000000000000000084871286820588128184161615610a9e57610a9e610b1b565b858712925087820587128484161615610ab957610ab9610b1b565b87850587128184161615610acf57610acf610b1b565b505050929093029392505050565b600060ff821660ff841680821015610af757610af7610b1b565b90039392505050565b6000600019821415610b1457610b14610b1b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60ff81168114610b5657600080fd5b5056fea26469706673582212201d6e9e8a372d9b1e775affa360d03c20419b136b48a979f79160b9018b139bf864736f6c63430008040033";
class PriceConsumerMock__factory extends ethers_1.ContractFactory {
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
exports.PriceConsumerMock__factory = PriceConsumerMock__factory;
PriceConsumerMock__factory.bytecode = _bytecode;
PriceConsumerMock__factory.abi = _abi;
