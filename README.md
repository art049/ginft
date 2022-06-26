# GiNFT: ETHNYC2022 Hackathon Project

## Setup

Install dependencies

```shell
pnpm install
```

Run the contracts deployed on a local chain

```shell
cd packages/contracts
pnpm dev
```

Run the frontend

```shell
cd packages/app
pnpm dev
```

# Setup Lima instead of docker

[Source](https://itnext.io/replace-docker-desktop-with-lima-88ec6f9d6a19)

1. Create file [docker.yaml](https://github.com/lima-vm/lima/blob/master/examples/docker.yaml)
2. `limactl start docker.yaml`
