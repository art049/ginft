import deployments from "@ginft/contracts/dist/deployments.json";

// const demosContracts = deployments[1338].demos.contracts;
const localhostContracts = deployments[31337].hardhat.contracts;

interface StaticConfig {
  blockNativeAPIKey: string;
  chainID: number;
  contracts: typeof localhostContracts;
  graphqlEndpoint: string;
  infuraKey: string;
  networkName: "Demos" | "Localhost";
  rpcURL: string;
  frontBaseUrl: string;
  nftStorageKey: string;
}

const getStaticConfig = (): StaticConfig => {
  const blockNativeAPIKey = process.env.NEXT_PUBLIC_BLOCKNATIVE_API_KEY;
  if (!blockNativeAPIKey) throw new Error("No Blocknative API Key");

  const rpcURL = process.env.NEXT_PUBLIC_RPC_URL;
  if (!rpcURL) throw new Error("No RPC URL");

  const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
  if (!infuraKey) throw new Error("No InfuraKey");

  const frontBaseUrl = process.env.NEXT_PUBLIC_FRONT_BASEURL;
  if (!frontBaseUrl) throw new Error("No front base url");

  const nftStorageKey = process.env.NEXT_PUBLIC_NFTSTORAGEKEY;
  if (!nftStorageKey) throw new Error("No Nft storage key");

  const baseConfig = {
    blockNativeAPIKey,
    nftStorageKey,
    rpcURL,
    infuraKey,
    frontBaseUrl,
  };

  // if (process.env.NEXT_PUBLIC_ENV === "preview") {
  //   return {
  //     ...baseConfig,
  //     chainID: 1338,
  //     networkName: "Demos",
  //     contracts: demosContracts,
  //     graphqlEndpoint: "https://preview.api.demos.ventures/api/graphql",
  //   };
  // }
  return {
    ...baseConfig,
    chainID: 1337,
    networkName: "Localhost",
    contracts: localhostContracts,
    graphqlEndpoint: "http://localhost:3001/api/graphql",
  };
};

export const staticConfig = getStaticConfig();
