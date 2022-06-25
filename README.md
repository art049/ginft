# Monorepo Template

## Setup

Link smart-contracts local repo:

```shell
pnpm -r link:smart-contracts
```

### Authenticate to the Github NPM Registry

```shell
npm login --scope=@demoslabs --registry=https://npm.pkg.github.com
```

Connection details:

- Username: your github username
- Password: a github personal access token with the `repo` and `read:packages` scopes
- Email: your github email

# Setup Lima instead of docker

[Source](https://itnext.io/replace-docker-desktop-with-lima-88ec6f9d6a19)

1. Create file [docker.yaml](https://github.com/lima-vm/lima/blob/master/examples/docker.yaml)
2. `limactl start docker.yaml`
