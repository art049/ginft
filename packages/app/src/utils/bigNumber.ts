import { BigNumber, BigNumberish } from "ethers";
import { commify, formatUnits } from "ethers/lib/utils";

export const roundUnit = (
  value: BigNumber,
  decimals: number,
  roundingDecimals: number
): BigNumber => {
  const ten = BigNumber.from(10);
  const d = ten.pow(decimals - roundingDecimals);
  return value.div(d).mul(d);
};

export const roundEther = (
  value: BigNumber,
  roundingDecimals: number
): BigNumber => {
  return roundUnit(value, 18, roundingDecimals);
};

export const formatRoundedUnits = (
  value: BigNumber,
  unitName: BigNumberish,
  roundingDecimals?: number
): string => {
  return value.eq(0)
    ? "0"
    : commify(formatUnits(roundEther(value, roundingDecimals ?? 2), unitName));
};

export const formatRoundedEther = (
  value: BigNumber,
  roundingDecimals?: number
): string => {
  return formatRoundedUnits(value, 18, roundingDecimals);
};
