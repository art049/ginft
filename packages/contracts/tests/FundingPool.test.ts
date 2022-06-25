import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import { deployments } from "hardhat";
import { FundingPool__factory, IERC20 } from "../lib";

chai.use(solidity);
describe("FundingPool", () => {
  const setup = deployments.createFixture(
    async ({ ethers, getNamedAccounts }) => {
      const { user } = await getNamedAccounts();
      const userSigner = await ethers.getSigner(user);
      const FundingPool = await ethers.getContractFactory<FundingPool__factory>(
        "FundingPool"
      );
      await deployments.fixture(["ERC20"]);
      const USDC = await ethers.getContractAt<IERC20>(
        "IERC20",
        (
          await deployments.get("USDC")
        ).address
      );
      const fundingPool = await FundingPool.deploy();
      const aggregatorAddress = ethers.constants.AddressZero;
      return {
        fundingPool,
        USDC,
        userSigner,
        aggregatorAddress,
      };
    }
  );
  describe("deposit", () => {
    it("Should not deposit a non allowed asset", async function () {
      const { fundingPool, USDC } = await setup();
      await expect(fundingPool.deposit(USDC.address, 1)).to.be.revertedWith(
        "Asset is not allowed"
      );
    });
    it("Should not deposit a zero amount", async function () {
      const { fundingPool, USDC } = await setup();
      await fundingPool.enableAsset(USDC.address, USDC.address);
      await expect(fundingPool.deposit(USDC.address, 0)).to.be.revertedWith(
        "Amount must be greater than 0"
      );
    });
    it("Should not deposit without allowance", async function () {
      const { fundingPool, USDC } = await setup();
      await fundingPool.enableAsset(USDC.address, USDC.address);
      await expect(fundingPool.deposit(USDC.address, 10)).to.be.revertedWith(
        "Allowance is not sufficient"
      );
    });
    it("Should allow deposit and reflect changes", async () => {
      const { fundingPool, USDC, userSigner } = await setup();
      await fundingPool.enableAsset(USDC.address, USDC.address);
      await USDC.connect(userSigner).approve(fundingPool.address, 10);
      await expect(() =>
        fundingPool.connect(userSigner).deposit(USDC.address, 10)
      ).to.changeTokenBalances(USDC, [fundingPool, userSigner], ["10", "-10"]);
      expect(
        await fundingPool.depositBalance(userSigner.address, USDC.address)
      ).to.be.equal(10);
    });
    it("Should allow deposit and emit", async () => {
      const { fundingPool, USDC, userSigner } = await setup();
      await fundingPool.enableAsset(USDC.address, USDC.address);
      await USDC.connect(userSigner).approve(fundingPool.address, 10);
      await expect(fundingPool.connect(userSigner).deposit(USDC.address, 5))
        .to.emit(fundingPool, "Deposit")
        .withArgs(USDC.address, userSigner.address, 5);
    });
    it("Should allow deposit and list depositors", async () => {
      const { fundingPool, USDC, userSigner } = await setup();
      await fundingPool.enableAsset(USDC.address, USDC.address);
      await USDC.connect(userSigner).approve(fundingPool.address, 10);
      await fundingPool.connect(userSigner).deposit(USDC.address, 5);
      expect(await fundingPool.depositors()).to.have.length(1);
    });
  });
  describe("withdraw", () => {
    const setupWithDeposit = async () => {
      const { fundingPool, USDC, userSigner } = await setup();
      await fundingPool.enableAsset(USDC.address, USDC.address);
      await USDC.connect(userSigner).approve(fundingPool.address, 10);
      await fundingPool.connect(userSigner).deposit(USDC.address, 10);
      return { fundingPool, USDC, userSigner };
    };
    it("Should not allow withdrawing 0", async () => {
      const { fundingPool, USDC, userSigner } = await setupWithDeposit();
      await expect(
        fundingPool.connect(userSigner).withdraw(USDC.address, 0)
      ).to.be.revertedWith("Amount must be greater than 0");
    });
    it("Should not allow withdrawing more than the deposited amount", async () => {
      const { fundingPool, USDC, userSigner } = await setupWithDeposit();
      await expect(
        fundingPool.connect(userSigner).withdraw(USDC.address, 11)
      ).to.be.revertedWith("Amount must be less than or equal to the deposit");
    });
    it("Should allow withdrawing a disabled asset", async () => {
      const { fundingPool, USDC, userSigner } = await setupWithDeposit();
      await fundingPool.disableAsset(USDC.address);
      await expect(
        fundingPool.connect(userSigner).withdraw(USDC.address, 10)
      ).to.not.be.revertedWith("Asset is not allowed");
    });
    it("Should allow withdrawing and reflect changes", async () => {
      const { fundingPool, USDC, userSigner } = await setupWithDeposit();
      await expect(() =>
        fundingPool.connect(userSigner).withdraw(USDC.address, 5)
      ).to.changeTokenBalances(USDC, [fundingPool, userSigner], ["-5", "5"]);
      expect(
        await fundingPool.depositBalance(userSigner.address, USDC.address)
      ).to.be.equal(5);
    });
    it("Should allow withdrawing and emit", async () => {
      const { fundingPool, USDC, userSigner } = await setupWithDeposit();
      await expect(fundingPool.connect(userSigner).withdraw(USDC.address, 5))
        .to.emit(fundingPool, "Withdrawal")
        .withArgs(USDC.address, userSigner.address, 5);
    });
  });
  describe("enableAsset", () => {
    it("Should allow enabling an asset and reflect", async () => {
      const { fundingPool, USDC, aggregatorAddress } = await setup();
      await fundingPool.enableAsset(USDC.address, aggregatorAddress);
      expect(await fundingPool.isAssetEnabled(USDC.address)).to.be.true;
    });
    it("Should allow enabling an asset and emit", async () => {
      const { fundingPool, USDC, aggregatorAddress } = await setup();
      await expect(fundingPool.enableAsset(USDC.address, aggregatorAddress))
        .to.emit(fundingPool, "AssetEnabled")
        .withArgs(USDC.address, aggregatorAddress);
    });
    it("Should not allow enabling an asset already enabled", async () => {
      const { fundingPool, USDC, aggregatorAddress } = await setup();
      await fundingPool.enableAsset(USDC.address, aggregatorAddress);
      await expect(
        fundingPool.enableAsset(USDC.address, aggregatorAddress)
      ).to.be.revertedWith("Asset already enabled");
    });
    it("Should not enable assets by default", async () => {
      const { fundingPool, USDC } = await setup();
      expect(await fundingPool.isAssetEnabled(USDC.address)).to.be.false;
    });
    it("Should not allow non owner to enable an asset", async () => {
      const { fundingPool, USDC, userSigner, aggregatorAddress } =
        await setup();
      await expect(
        fundingPool
          .connect(userSigner)
          .enableAsset(USDC.address, aggregatorAddress)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
  describe("disableAsset", () => {
    it("Should not be able to disable a disabled asset", async () => {
      const { fundingPool, USDC } = await setup();
      await expect(fundingPool.disableAsset(USDC.address)).to.be.revertedWith(
        "Asset already disabled"
      );
    });
    it("Should disable an asset and reflect", async () => {
      const { fundingPool, USDC, aggregatorAddress } = await setup();
      await fundingPool.enableAsset(USDC.address, aggregatorAddress);
      expect(await fundingPool.isAssetEnabled(USDC.address)).to.be.true;
      await fundingPool.disableAsset(USDC.address);
      expect(await fundingPool.isAssetEnabled(USDC.address)).to.be.false;
    });
    it("Should disable an asset and emit", async () => {
      const { fundingPool, USDC, aggregatorAddress } = await setup();
      await fundingPool.enableAsset(USDC.address, aggregatorAddress);
      await expect(fundingPool.disableAsset(USDC.address))
        .to.emit(fundingPool, "AssetDisabled")
        .withArgs(USDC.address);
    });
    it("Should not allow non owner to disable an asset", async () => {
      const { fundingPool, USDC, userSigner } = await setup();
      await expect(
        fundingPool.connect(userSigner).disableAsset(USDC.address)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
