import { ethers, network } from "hardhat";
import sleep from "sleep-promise";

export const increaseTime = async (seconds: number) => {
  console.info(`Increasing block time by ${seconds} seconds`);
  await ethers.provider.send("evm_increaseTime", [seconds]);
  await ethers.provider.send("evm_mine", []);
  if (network.name !== "hardhat") {
    await sleep(2000);
  }
};
