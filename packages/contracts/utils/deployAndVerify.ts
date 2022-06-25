import { DeployOptions } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import sleep from "sleep-promise";

export const deployAndVerify = async (
  hre: HardhatRuntimeEnvironment,
  name: string,
  options: DeployOptions
) => {
  const deployResult = await hre.deployments.deploy(name, options);
  if (deployResult.newlyDeployed && hre.network.live) {
    await sleep(10000); // Let blockscout gather the new block
  }
  if (hre.network.live) {
    try {
      await hre.run("verify:verify", {
        address: deployResult.address,
        constructorArguments: options.args,
      });
    } catch (e: unknown) {
      if (
        e instanceof Error &&
        e.message.includes("Smart-contract already verified")
      ) {
        console.log("Already verified");
      } else if (
        e instanceof Error &&
        e.message.includes("Fail - Unable to verify")
      ) {
        console.log(
          "Unable to verify (probably already verified through another contract)"
        );
      } else {
        throw e;
      }
    }
  }
  return deployResult;
};
