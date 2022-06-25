import { BigNumberish } from "@ethersproject/bignumber";
import { parseUnits } from "@ethersproject/units";
import { deployments } from "hardhat";
import {
  IERC20__factory,
  IFundingPool__factory,
  IRandomNumberProvider__factory,
  MintToken__factory,
  VentureController__factory,
  VentureToken__factory,
} from "../../lib";
import { getUsers, increaseTime } from "../../utils";
import { bigGasLimit } from "./bigGasLimit";
import setFundingPoolAllowance from "./setFundingPoolAllowance";

export const setup = deployments.createFixture(
  async ({ ethers, getNamedAccounts, getUnnamedAccounts }) => {
    const { deployer, user } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);
    const userSigner = await ethers.getSigner(user);
    const users = (await getUnnamedAccounts()).slice(0, 10);
    const userSigners = await Promise.all(users.map(ethers.getSigner));

    await deployments.fixture([
      "FundingPool",
      "RandomNumberProvider",
      "Libraries",
    ]);
    const fundingPool = IFundingPool__factory.connect(
      (await deployments.get("FundingPool")).address,
      deployerSigner
    );
    const randomNumberProvider = IRandomNumberProvider__factory.connect(
      (await deployments.get("RandomNumberProvider")).address,
      deployerSigner
    );
    const usdt = IERC20__factory.connect(
      (await deployments.get("USDT")).address,
      userSigner
    );
    const wbtc = IERC20__factory.connect(
      (await deployments.get("WBTC")).address,
      userSigner
    );
    const tokenFactoryDeployment = await deployments.get("TokenFactory");
    const offerDeployment = await deployments.get("Offer");

    const VentureController = new VentureController__factory(
      {
        ["contracts/libraries/TokenFactory.sol:TokenFactory"]:
          tokenFactoryDeployment.address,
        ["contracts/libraries/Offer.sol:Offer"]: offerDeployment.address,
      },
      deployerSigner
    );
    const { venturePartner } = await getUsers();
    return {
      venturePartner: venturePartner.address,
      fundingPool,
      randomNumberProvider,
      VentureController,
      userSigner,
      deployerSigner,
      userSigners,
      usdt,
      wbtc,
      name: "AstroBoys",
      symbol: "AB",
    };
  }
);

export const setupDeployed = async () => {
  const data = await setup();
  const {
    VentureController,
    fundingPool,
    randomNumberProvider,
    name,
    symbol,
    venturePartner,
  } = data;
  const ventureController = await VentureController.deploy(
    name,
    symbol,
    venturePartner,
    fundingPool.address,
    randomNumberProvider.address
  );
  await setFundingPoolAllowance();
  await fundingPool.addVentureController(ventureController.address);
  return { ventureController, ...data };
};

export const setupLotteryWinnersDrawn = async (lotteryWinners = 10) => {
  const minterCount = 10;
  const depositBalance = 150;
  const usdAmount = depositBalance * minterCount;

  const data = await setupDeployed();
  const { ventureController, userSigners, fundingPool, usdt } = data;
  const depositors = userSigners.slice(0, minterCount);
  await Promise.all(
    depositors.map((signer) =>
      fundingPool
        .connect(signer)
        .deposit(usdt.address, parseUnits(`${depositBalance}`))
    )
  );
  await ventureController.selectLotteryParticipants(100, bigGasLimit);
  await ventureController.setRandomRequestId();
  await ventureController.drawLotteryWinners(lotteryWinners);

  return {
    ...data,
    depositors,
    minterCount,
    depositBalance,
    usdAmount,
    partnerUsdAmount: 1000,
    supply: parseUnits(`${1_000_000}`),
  };
};

export const setupOfferOpened = async ({
  offerDurationInDays = 1,
  minMintersTicket = 100,
  maxMintersTicket = 200,
  venturePartnerTicket = 200,
}: Partial<{
  offerDurationInDays: BigNumberish;
  minMintersTicket: BigNumberish;
  maxMintersTicket: BigNumberish;
  venturePartnerTicket: BigNumberish;
}> = {}) => {
  const data = await setupLotteryWinnersDrawn();
  await data.ventureController.startOffer(
    offerDurationInDays,
    minMintersTicket,
    maxMintersTicket,
    venturePartnerTicket
  );
  return data;
};

export const setupOfferAccepted = async ({
  offerDurationInDays = 1,
  minMintersTicket = 1000,
  maxMintersTicket = 2000,
  venturePartnerTicket = 1000,
  maxToInvest = 150,
}: Partial<{
  offerDurationInDays: BigNumberish;
  minMintersTicket: BigNumberish;
  maxMintersTicket: BigNumberish;
  venturePartnerTicket: BigNumberish;
  maxToInvest: BigNumberish;
}> = {}) => {
  const data = await setupOfferOpened({
    offerDurationInDays,
    minMintersTicket,
    maxMintersTicket,
    venturePartnerTicket,
  });

  const lotteryWinners = await data.ventureController.lotteryWinners();
  await Promise.all(
    lotteryWinners.map((address) => {
      const signers = data.depositors.filter((s) => s.address === address);
      if (signers.length !== 1) {
        throw new Error(`More than one signer: ${signers.length}`);
      }
      return data.ventureController
        .connect(signers[0])
        .acceptOffer(maxToInvest);
    })
  );
  await increaseTime(60 * 60 * 24); // 1 day

  return {
    ...data,
    lotteryWinners,
  };
};

export const setupMinted = async () => {
  const data = await setupOfferAccepted();
  const {
    ventureController,
    minterCount,
    usdAmount,
    partnerUsdAmount,
    supply,
    deployerSigner,
  } = data;
  await ventureController.mint(bigGasLimit);
  const ventureToken = VentureToken__factory.connect(
    await ventureController.ventureToken(),
    deployerSigner
  );
  const mintToken = MintToken__factory.connect(
    await ventureController.mintToken(),
    deployerSigner
  );
  return { ...data, ventureToken, mintToken };
};

export const setupValidated = async () => {
  const data = await setupMinted();
  await data.ventureController.withdrawFunds();
  return data;
};
