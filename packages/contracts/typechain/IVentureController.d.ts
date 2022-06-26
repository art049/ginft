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

interface IVentureControllerInterface extends ethers.utils.Interface {
  functions: {
    "exit(address,uint256)": FunctionFragment;
    "getMinters()": FunctionFragment;
    "getPotentialMinters()": FunctionFragment;
    "isBurnAllowed()": FunctionFragment;
    "isClaimAllowed()": FunctionFragment;
    "mint(uint256,uint256,uint256,uint256)": FunctionFragment;
    "mintToken()": FunctionFragment;
    "name()": FunctionFragment;
    "partner()": FunctionFragment;
    "selectPotentialMinters(uint256)": FunctionFragment;
    "state()": FunctionFragment;
    "symbol()": FunctionFragment;
    "validateDeal()": FunctionFragment;
    "ventureToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPotentialMinters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isBurnAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "mintToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "partner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "selectPotentialMinters",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validateDeal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ventureToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMinters", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPotentialMinters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBurnAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isClaimAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "partner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selectPotentialMinters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateDeal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ventureToken",
    data: BytesLike
  ): Result;

  events: {
    "MinterPicked(address)": EventFragment;
    "PotentialMinterSelected(address)": EventFragment;
    "VentureStateChanged(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinterPicked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PotentialMinterSelected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VentureStateChanged"): EventFragment;
}

export type MinterPickedEvent = TypedEvent<[string] & { minter: string }>;

export type PotentialMinterSelectedEvent = TypedEvent<
  [string] & { potentialMinter: string }
>;

export type VentureStateChangedEvent = TypedEvent<
  [number] & { newState: number }
>;

export class IVentureController extends BaseContract {
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

  interface: IVentureControllerInterface;

  functions: {
    exit(
      exitToken_: string,
      exitAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMinters(overrides?: CallOverrides): Promise<[string[]]>;

    getPotentialMinters(overrides?: CallOverrides): Promise<[string[]]>;

    isBurnAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    isClaimAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      mintersCount: BigNumberish,
      amountUSD: BigNumberish,
      ventureTokenSupply: BigNumberish,
      partnerAmountUSD: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintToken(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    partner(overrides?: CallOverrides): Promise<[string]>;

    selectPotentialMinters(
      minAmountUSD: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    validateDeal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ventureToken(overrides?: CallOverrides): Promise<[string]>;
  };

  exit(
    exitToken_: string,
    exitAmount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMinters(overrides?: CallOverrides): Promise<string[]>;

  getPotentialMinters(overrides?: CallOverrides): Promise<string[]>;

  isBurnAllowed(overrides?: CallOverrides): Promise<boolean>;

  isClaimAllowed(overrides?: CallOverrides): Promise<boolean>;

  mint(
    mintersCount: BigNumberish,
    amountUSD: BigNumberish,
    ventureTokenSupply: BigNumberish,
    partnerAmountUSD: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintToken(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  partner(overrides?: CallOverrides): Promise<string>;

  selectPotentialMinters(
    minAmountUSD: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  symbol(overrides?: CallOverrides): Promise<string>;

  validateDeal(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ventureToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    exit(
      exitToken_: string,
      exitAmount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getMinters(overrides?: CallOverrides): Promise<string[]>;

    getPotentialMinters(overrides?: CallOverrides): Promise<string[]>;

    isBurnAllowed(overrides?: CallOverrides): Promise<boolean>;

    isClaimAllowed(overrides?: CallOverrides): Promise<boolean>;

    mint(
      mintersCount: BigNumberish,
      amountUSD: BigNumberish,
      ventureTokenSupply: BigNumberish,
      partnerAmountUSD: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintToken(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    partner(overrides?: CallOverrides): Promise<string>;

    selectPotentialMinters(
      minAmountUSD: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    symbol(overrides?: CallOverrides): Promise<string>;

    validateDeal(overrides?: CallOverrides): Promise<void>;

    ventureToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "MinterPicked(address)"(
      minter?: null
    ): TypedEventFilter<[string], { minter: string }>;

    MinterPicked(minter?: null): TypedEventFilter<[string], { minter: string }>;

    "PotentialMinterSelected(address)"(
      potentialMinter?: null
    ): TypedEventFilter<[string], { potentialMinter: string }>;

    PotentialMinterSelected(
      potentialMinter?: null
    ): TypedEventFilter<[string], { potentialMinter: string }>;

    "VentureStateChanged(uint8)"(
      newState?: null
    ): TypedEventFilter<[number], { newState: number }>;

    VentureStateChanged(
      newState?: null
    ): TypedEventFilter<[number], { newState: number }>;
  };

  estimateGas: {
    exit(
      exitToken_: string,
      exitAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMinters(overrides?: CallOverrides): Promise<BigNumber>;

    getPotentialMinters(overrides?: CallOverrides): Promise<BigNumber>;

    isBurnAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintersCount: BigNumberish,
      amountUSD: BigNumberish,
      ventureTokenSupply: BigNumberish,
      partnerAmountUSD: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintToken(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    partner(overrides?: CallOverrides): Promise<BigNumber>;

    selectPotentialMinters(
      minAmountUSD: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    validateDeal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ventureToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    exit(
      exitToken_: string,
      exitAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMinters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPotentialMinters(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBurnAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      mintersCount: BigNumberish,
      amountUSD: BigNumberish,
      ventureTokenSupply: BigNumberish,
      partnerAmountUSD: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    selectPotentialMinters(
      minAmountUSD: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validateDeal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ventureToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
