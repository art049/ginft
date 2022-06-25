import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from "hardhat";
import { IERC20__factory } from "../../lib";

const setFundingPoolAllowance = async () => {
  const { deployer, user } = await getNamedAccounts();
  const users = await getUnnamedAccounts();
  const assetSymbols = ["USDT", "WBTC", "USDC", "DAI", "WETH"];
  const fundingPoolAddress = (await deployments.get("FundingPool")).address;
  await Promise.all(
    assetSymbols.map(async (symbol) => {
      const erc20 = IERC20__factory.connect(
        (await deployments.get(symbol)).address,
        await ethers.getSigner(deployer)
      );
      await Promise.all(
        [user, ...users].map(async (userAddress) =>
          erc20
            .connect(await ethers.getSigner(userAddress))
            .approve(fundingPoolAddress, ethers.constants.MaxUint256)
        )
      );
    })
  );
};

export default setFundingPoolAllowance;
