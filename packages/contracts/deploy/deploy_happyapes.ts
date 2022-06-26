import { getUnnamedAccounts } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { HappyApes__factory } from "../lib/typechain";
import { deployAndVerify } from "../utils";
import executeTx from "../utils/executeTx";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  const deployment = await deployAndVerify(hre, "HappyApes", {
    from: deployer,
    contract: "HappyApes",
    log: true,
    autoMine: true,
  });
  if (deployment.newlyDeployed) {
    const happ = HappyApes__factory.connect(
      deployment.address,
      await hre.ethers.getSigner(deployer)
    );
    for await (const user of (await getUnnamedAccounts()).slice(0, 10)) {
      await executeTx(happ.mint(user));
      console.log(`Mint to ${user}`);
    }
    await executeTx(happ.mint(deployer));
    await executeTx(happ.mint(deployer));
    await executeTx(happ.mint(deployer));
  }
};
export default func;
func.tags = ["HappyApes"];
