import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import * as dotenv from "dotenv";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "hardhat-prettier";
import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";

dotenv.config();

const baseLiveNetwork = {
  url: process.env.LOCAL_RPC_URL ?? "",
  timeout: 120000,
  live: true,
  saveDeployments: true,
};

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
    venturePartner: 1,
    legalPartner: 2,
    user: 3,
    kycOwner: 4,
    userKYCPassed: 5,
    userKYCFailed: 6,
    userLotteryLoser: 7,
    userLotteryWinner: 8,
  },
  networks: {
    mainnet: {
      ...baseLiveNetwork,
      chainId: 1,
    },
    rinkeby: {
      ...baseLiveNetwork,
      chainId: 4,
    },
    mumbai: {
      timeout: 120000,
      live: false,
      saveDeployments: true,
      chainId: 80001,
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: {
        mnemonic:
          "fortune patrol torch maximum zoo access start dish ghost dinosaur chalk glue drive program insect",
      },
    },
    polygon: {
      ...baseLiveNetwork,
      chainId: 137,
    },
    // network used during the tests and package build
    hardhat: {
      live: false,
      initialDate: "2020-01-01",
      chainId: 1337,
    },
    // network used when running "hardhat node".
    localhost: {
      url: "http://localhost:8545",
    },
    demos: {
      mining: {
        auto: true,
      },
      saveDeployments: true,
      live: process.env.CI === undefined,
      url: process.env.DEMOS_PRIVATE_RPC_URL ?? "",
      timeout: 0,
      chainId: 1338,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "EUR",
    coinmarketcap: process.env.COINMC_API_KEY,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY ?? "none",
  },
  paths: {
    tests: "./tests",
  },
  typechain: {
    outDir: "lib/typechain",
  },
};

export default config;
