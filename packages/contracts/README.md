<div align="center">

# Demos Smart-Contracts

</div>

## Getting started

### :hammer: Installation

- Install [git-lfs](https://git-lfs.github.com/)
- Install [hardhat shorthand](https://hardhat.org/guides/shorthand.html)
- Install the packages: `pnpm i`

### :bulb: Useful commands

- Run the tests `pnpm test`
- Compile the contracts `pnpm compile`
- Generate the gas report `OPTIMIZE=true REPORT_GAS=true pnpm test`
- Manually run the linters `pnpm lint`

### User wallets

Environment variables can be defined in the `.env` file.

| Index | Address                                    | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| 0     | 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 | Contracts deployer     |
| 1     | 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 | Venture Partner        |
| 2     | 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC | Legal Partner          |
| 3     | 0x90F79bf6EB2c4f870365E785982E1f101E93b906 | Untouched user         |
| 4     | 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 | IdentityProvider Owner |
| 5     | 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc | KYC passed user        |
| 6     | 0x976ea74026e726554db657fa54763abd0c3a0aa9 | KYC failed user        |
| 7     | 0x14dc79964da2c08b23698b3d3cc7ca32193d9955 | Lottery loser          |
| 8     | 0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f | Lottery winner         |

### :gear: Environment variables

Environment variables can be defined in the `.env` file.

| Variable                   | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| COINMC_API_KEY             | CoinMarketCap API key used for gas reporting                       |
| ETHERSCAN_API_KEY          | Etherscan API key used to verify the contracts                     |
| POLYGONSCAN_API_KEY        | Polygonscan API key used to verify the contracts                   |
| LOCAL_RPC_URL              | URL of a local RPC relay (f.e. http://127.0.0.1:1248 for frame.sh) |
| DEMOS_PRIVATE_RPC          | Authenticated RPC URL to Demos private network                     |
| DEMOS_PRIVATE_EXPLORER_API | Authenticated URL to Demos private network explorer API            |
| DEMOS_PRIVATE_EXPLORER     | Non-authenticated URL to Demos block explorer                      |

# Resources

- https://swcregistry.io/
- https://consensys.github.io/smart-contract-best-practices/recommendations/
- https://fravoll.github.io/solidity-patterns/
- https://docs.soliditylang.org/en/v0.8.11/
