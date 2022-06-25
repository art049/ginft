import { parseUnits } from "@ethersproject/units";
import { BigNumber, BigNumberish } from "ethers";

export const toEthers = (value: BigNumberish): BigNumber =>
  parseUnits(value.toString());

export const toUnits = (value: BigNumberish, units?: BigNumberish): BigNumber =>
  parseUnits(value.toString(), units);
