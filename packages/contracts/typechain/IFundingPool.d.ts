/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IFundingPoolInterface extends ethers.utils.Interface {
  functions: {
    "addVentureController(address)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "depositBalance(address,address)": FunctionFragment;
    "depositors()": FunctionFragment;
    "disableAsset(address)": FunctionFragment;
    "enableAsset(address,address)": FunctionFragment;
    "fundVentureController(address,tuple[],(uint256[],uint256[],uint256[],uint256),address[])": FunctionFragment;
    "getEnabledAssets()": FunctionFragment;
    "isAssetEnabled(address)": FunctionFragment;
    "ventureControllers()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addVentureController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableAsset",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fundVentureController",
    values: [
      string,
      { token: string; decimals: BigNumberish; priceFeed: string }[],
      {
        assetAmountToWithdraw: BigNumberish[];
        fundingPerMinterPerAsset: BigNumberish[];
        fundingPerMinter: BigNumberish[];
        globalFunding: BigNumberish;
      },
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getEnabledAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAssetEnabled",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ventureControllers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addVentureController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundVentureController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEnabledAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAssetEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ventureControllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AssetDisabled(address)": EventFragment;
    "AssetEnabled(address,address)": EventFragment;
    "Deposit(address,address,uint256)": EventFragment;
    "VentureAdded(address)": EventFragment;
    "Withdrawal(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VentureAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type AssetDisabledEvent = TypedEvent<[string] & { _asset: string }>;

export type AssetEnabledEvent = TypedEvent<
  [string, string] & { _asset: string; _aggregator: string }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber] & {
    _asset: string;
    _from: string;
    _value: BigNumber;
  }
>;

export type VentureAddedEvent = TypedEvent<[string] & { controller: string }>;

export type WithdrawalEvent = TypedEvent<
  [string, string, BigNumber] & {
    _asset: string;
    _to: string;
    _value: BigNumber;
  }
>;

export class IFundingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IFundingPoolInterface;

  functions: {
    addVentureController(
      controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositBalance(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositors(overrides?: CallOverrides): Promise<[string[]]>;

    disableAsset(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableAsset(
      asset: string,
      priceFeed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fundVentureController(
      ventureController: string,
      assets: { token: string; decimals: BigNumberish; priceFeed: string }[],
      allocation: {
        assetAmountToWithdraw: BigNumberish[];
        fundingPerMinterPerAsset: BigNumberish[];
        fundingPerMinter: BigNumberish[];
        globalFunding: BigNumberish;
      },
      minters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getEnabledAssets(
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, number, string] & {
          token: string;
          decimals: number;
          priceFeed: string;
        })[]
      ]
    >;

    isAssetEnabled(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    ventureControllers(overrides?: CallOverrides): Promise<[string[]]>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addVentureController(
    controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositBalance(
    user: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositors(overrides?: CallOverrides): Promise<string[]>;

  disableAsset(
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableAsset(
    asset: string,
    priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fundVentureController(
    ventureController: string,
    assets: { token: string; decimals: BigNumberish; priceFeed: string }[],
    allocation: {
      assetAmountToWithdraw: BigNumberish[];
      fundingPerMinterPerAsset: BigNumberish[];
      fundingPerMinter: BigNumberish[];
      globalFunding: BigNumberish;
    },
    minters: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getEnabledAssets(
    overrides?: CallOverrides
  ): Promise<
    ([string, number, string] & {
      token: string;
      decimals: number;
      priceFeed: string;
    })[]
  >;

  isAssetEnabled(asset: string, overrides?: CallOverrides): Promise<boolean>;

  ventureControllers(overrides?: CallOverrides): Promise<string[]>;

  withdraw(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addVentureController(
      controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositBalance(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositors(overrides?: CallOverrides): Promise<string[]>;

    disableAsset(asset: string, overrides?: CallOverrides): Promise<void>;

    enableAsset(
      asset: string,
      priceFeed: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fundVentureController(
      ventureController: string,
      assets: { token: string; decimals: BigNumberish; priceFeed: string }[],
      allocation: {
        assetAmountToWithdraw: BigNumberish[];
        fundingPerMinterPerAsset: BigNumberish[];
        fundingPerMinter: BigNumberish[];
        globalFunding: BigNumberish;
      },
      minters: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getEnabledAssets(
      overrides?: CallOverrides
    ): Promise<
      ([string, number, string] & {
        token: string;
        decimals: number;
        priceFeed: string;
      })[]
    >;

    isAssetEnabled(asset: string, overrides?: CallOverrides): Promise<boolean>;

    ventureControllers(overrides?: CallOverrides): Promise<string[]>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetDisabled(address)"(
      _asset?: string | null
    ): TypedEventFilter<[string], { _asset: string }>;

    AssetDisabled(
      _asset?: string | null
    ): TypedEventFilter<[string], { _asset: string }>;

    "AssetEnabled(address,address)"(
      _asset?: string | null,
      _aggregator?: string | null
    ): TypedEventFilter<
      [string, string],
      { _asset: string; _aggregator: string }
    >;

    AssetEnabled(
      _asset?: string | null,
      _aggregator?: string | null
    ): TypedEventFilter<
      [string, string],
      { _asset: string; _aggregator: string }
    >;

    "Deposit(address,address,uint256)"(
      _asset?: string | null,
      _from?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _asset: string; _from: string; _value: BigNumber }
    >;

    Deposit(
      _asset?: string | null,
      _from?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _asset: string; _from: string; _value: BigNumber }
    >;

    "VentureAdded(address)"(
      controller?: null
    ): TypedEventFilter<[string], { controller: string }>;

    VentureAdded(
      controller?: null
    ): TypedEventFilter<[string], { controller: string }>;

    "Withdrawal(address,address,uint256)"(
      _asset?: string | null,
      _to?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _asset: string; _to: string; _value: BigNumber }
    >;

    Withdrawal(
      _asset?: string | null,
      _to?: string | null,
      _value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _asset: string; _to: string; _value: BigNumber }
    >;
  };

  estimateGas: {
    addVentureController(
      controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositBalance(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositors(overrides?: CallOverrides): Promise<BigNumber>;

    disableAsset(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableAsset(
      asset: string,
      priceFeed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fundVentureController(
      ventureController: string,
      assets: { token: string; decimals: BigNumberish; priceFeed: string }[],
      allocation: {
        assetAmountToWithdraw: BigNumberish[];
        fundingPerMinterPerAsset: BigNumberish[];
        fundingPerMinter: BigNumberish[];
        globalFunding: BigNumberish;
      },
      minters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getEnabledAssets(overrides?: CallOverrides): Promise<BigNumber>;

    isAssetEnabled(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ventureControllers(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVentureController(
      controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositBalance(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableAsset(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableAsset(
      asset: string,
      priceFeed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fundVentureController(
      ventureController: string,
      assets: { token: string; decimals: BigNumberish; priceFeed: string }[],
      allocation: {
        assetAmountToWithdraw: BigNumberish[];
        fundingPerMinterPerAsset: BigNumberish[];
        fundingPerMinter: BigNumberish[];
        globalFunding: BigNumberish;
      },
      minters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getEnabledAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAssetEnabled(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ventureControllers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
