"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFundingPool__factory = void 0;
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
        inputs: [
            {
                internalType: "address",
                name: "controller",
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
                name: "",
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
class IFundingPool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFundingPool__factory = IFundingPool__factory;
IFundingPool__factory.abi = _abi;
