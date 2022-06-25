import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { deployAndVerify } from "../utils";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  await deployAndVerify(hre, "RandomNumberProvider", {
    from: deployer,
    contract: "RandomNumberProviderMock",
    args: [1],
    log: true,
    autoMine: true,
  });
};
export default func;
func.tags = ["RandomNumberProvider"];
func.dependencies = ["FundingPool"];
