"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightConfigurationProviderMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "mintersWeight",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "partnerWeight",
                type: "uint256",
            },
        ],
        name: "getDemosWeight",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "partnerSharePercent",
                type: "uint256",
            },
        ],
        name: "getPartnerCommitmentPercent",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "mintersWeight",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "partnerCommitmentPercent",
                type: "uint256",
            },
        ],
        name: "getPartnerWeight",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "mintersWeight",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "mintersFunding",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "partnerFunding",
                type: "uint256",
            },
        ],
        name: "getRewardWeights",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "mintersWeight",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "partnerWeight",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "demosWeight",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "totalWeight",
                        type: "uint256",
                    },
                ],
                internalType: "struct WeightConfigurationProvider.RewardWeights",
                name: "weights",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610645806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806329f41e5c146100515780638ab270de14610077578063c5840b79146100bd578063d89cc4d9146100d0575b600080fd5b61006461005f36600461041f565b6100e3565b6040519081526020015b60405180910390f35b61008a610085366004610440565b6100f8565b60405161006e91908151815260208083015190820152604080830151908201526060918201519181019190915260800190565b6100646100cb36600461041f565b610136565b6100646100de366004610407565b610142565b60006100ef838361014d565b90505b92915050565b6101236040518060800160405280600081526020016000815260200160008152602001600081525090565b61012e8484846101a1565b949350505050565b60006100ef83836102e6565b60006100f282610341565b60008061015a838561046b565b9050600061016a600160066105c9565b6101756006846105aa565b61017f9190610483565b9050600661018e6001836105aa565b6101989190610483565b95945050505050565b6101cc6040518060800160405280600081526020016000815260200160008152602001600081525090565b83815260006101db848461046b565b6101e76002600a6104ff565b6101f28560646105aa565b6101fc91906105aa565b6102069190610483565b90506102146002600a6104ff565b61021f9060146105aa565b81101561028c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f506172746e657220736861726520697320746f6f20736d616c6c000000000000604482015260640160405180910390fd5b600061029782610341565b90506102a386826102e6565b6020840181905283516102b59161014d565b60408401819052602084015184516102cd919061046b565b6102d7919061046b565b60608401525090949350505050565b60006102f46002600a6104ff565b610300906102586105aa565b61030b8360056105aa565b6103176002600a6104ff565b610323906101906105aa565b61032d919061046b565b61033790856105aa565b6100ef9190610483565b6000806103506002600a6104ff565b61035b9060146105aa565b6103676002600a6104ff565b6103729060326105aa565b61037c91906105c9565b6103886002600a6104ff565b6103939060146105aa565b61039d90856105c9565b6103a96002600a6104ff565b6103b49060646105aa565b6103be91906105aa565b6103c89190610483565b90506103ea816103da6002600a6104ff565b6103e59060646105aa565b6103f1565b9392505050565b600081831061040057816100ef565b5090919050565b600060208284031215610418578081fd5b5035919050565b60008060408385031215610431578081fd5b50508035926020909101359150565b600080600060608486031215610454578081fd5b505081359360208301359350604090920135919050565b6000821982111561047e5761047e6105e0565b500190565b6000826104b7577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b600181815b808511156104f75781600019048211156104dd576104dd6105e0565b808516156104ea57918102915b93841c93908002906104c1565b509250929050565b60006100ef60ff841683600082610518575060016100f2565b81610525575060006100f2565b816001811461053b576002811461054557610561565b60019150506100f2565b60ff841115610556576105566105e0565b50506001821b6100f2565b5060208310610133831016604e8410600b8410161715610584575081810a6100f2565b61058e83836104bc565b80600019048211156105a2576105a26105e0565b029392505050565b60008160001904831182151516156105c4576105c46105e0565b500290565b6000828210156105db576105db6105e0565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122093dce30aee570dc3ac9f7b8b76d3b8b1e1ffc2186fe7bc7a903bb9f18b8ef66a64736f6c63430008040033";
class WeightConfigurationProviderMock__factory extends ethers_1.ContractFactory {
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
exports.WeightConfigurationProviderMock__factory = WeightConfigurationProviderMock__factory;
WeightConfigurationProviderMock__factory.bytecode = _bytecode;
WeightConfigurationProviderMock__factory.abi = _abi;