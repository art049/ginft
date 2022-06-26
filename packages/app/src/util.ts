import axios from "axios";
import { BigNumber, utils } from "ethers";
import { staticConfig } from "./config";

export const storeGlobal = (name: string, value: any) => {
  if (typeof window !== "undefined") {
    console.log(`Storing: ${name}`);
    (window as any)[name] = value;
  }
};

export const storeManyGlobal = (o: { [key: string]: any }) => {
  Object.keys(o).forEach((k) => storeGlobal(k, o[k]));
};

export const formatHexAddress = (address: string) => {
  return (
    address.slice(0, 6) +
    "..." +
    address.slice(address.length - 4, address.length)
  );
};

export const formatNumber = (number?: Number, decimals = 2) => {
  return number ? utils.commify(number.toFixed(decimals)) : "";
};

export const toNumber = (bigNumber?: BigNumber, isUnits = true) => {
  if (!bigNumber) bigNumber = BigNumber.from(0);
  const str = isUnits ? utils.formatEther(bigNumber) : bigNumber.toString();
  return parseFloat(str);
};

export const formatBigNumber = (
  bigNumber?: BigNumber,
  isUnits = true,
  decimals = 2
) => {
  return formatNumber(toNumber(bigNumber, isUnits), decimals);
};

export const uploadObjectToIpfs = async (
  data: Record<any, any>
): Promise<string> => {
  const s = JSON.stringify(data);
  const res = await axios.post("https://api.nft.storage/upload", s, {
    headers: {
      Authorization: `Bearer ${staticConfig.nftStorageKey}`,
      "Content-Type": "application/json",
    },
  });
  const cid = res.data?.value?.cid as string;
  return cid;
};
