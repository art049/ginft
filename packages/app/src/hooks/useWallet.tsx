import Onboard from "bnc-onboard";
import { API, Wallet } from "bnc-onboard/dist/src/interfaces";
import { ethers } from "ethers";
import React, { createContext, useContext, useEffect, useState } from "react";
import { staticConfig } from "../config";
import { storeGlobal } from "../util";
import { Venture } from "./useVentures";

interface WalletContextNotLoaded {
  isLoaded: false;
  isWalletSelected: false;
  isWalletConnected: false;
}

interface WalletContextLoaded {
  isLoaded: true;
  isWalletSelected: false;
  isWalletConnected: false;
  onboard: API;
  isPreviouslySelectedWallet?: boolean;
}

interface WalletContextLoadedSelected {
  isLoaded: true;
  isWalletSelected: true;
  isWalletConnected: false;
  isPreviouslySelectedWallet?: boolean;
  onboard: API;
  wallet: Wallet;
}

export interface WalletContextLoadedConnected {
  isLoaded: true;
  isWalletSelected: true;
  isWalletConnected: true;
  isPreviouslySelectedWallet?: boolean;
  onboard: API;
  wallet: Wallet;
  provider: ethers.providers.Web3Provider;
  signer: ethers.Signer;
  userAddress: string;
}

type WalletContextData =
  | WalletContextNotLoaded
  | WalletContextLoaded
  | WalletContextLoadedSelected
  | WalletContextLoadedConnected;

type WalletContext = WalletContextData & {
  disconnectWallet: () => Promise<void>;
  connectWallet: () => Promise<void>;
  checkWallet: () => Promise<void>;
  addVentureToWallet: (venture: Venture) => Promise<void>;
};

const STATIC_ONBOARD_CONFIG = {
  walletSelect: {
    wallets: [
      { walletName: "metamask", preferred: true },
      { walletName: "frame", preferred: true },
      {
        walletName: "ledger",
        rpcUrl: staticConfig.rpcURL,
        preferred: true,
      },
      {
        walletName: "walletConnect",
        infuraKey: staticConfig.infuraKey,
        preferred: true,
      },
      { walletName: "coinbase" },
      { walletName: "gnosis" },
    ],
  },
  walletCheck: [
    { checkName: "connect" },
    { checkName: "accounts" },
    { checkName: "network" },
  ],
};

export const WalletProvider: React.FC = ({ children }) => {
  const [context, setContext] = useState<WalletContextData>({
    isLoaded: false,
    isWalletSelected: false,
    isWalletConnected: false,
  });
  const [selectedWallet, setSelectedWallet] = useState<Wallet>();
  const [userAddress, setUserAddress] = useState<string>();

  useEffect(() => {
    const onboard = Onboard({
      dappId: staticConfig.blockNativeAPIKey,
      networkId: staticConfig.chainID,
      networkName: staticConfig.networkName,
      subscriptions: {
        wallet: setSelectedWallet,
        address: setUserAddress,
      },
      ...STATIC_ONBOARD_CONFIG,
    });
    storeGlobal("onboard", onboard);
    setContext({ ...context, isLoaded: true, onboard });
  }, [context.isLoaded]);

  useEffect(() => {
    const selectWalletIfPreviouslyLoggedIn = async () => {
      if (!context.isLoaded) return;
      const walletName = window.localStorage.getItem("selectedWallet");
      const userAddress = window.localStorage.getItem("userAddress");
      if (walletName !== null && userAddress !== null) {
        setContext({ ...context, isPreviouslySelectedWallet: true });
        await context.onboard.walletSelect(walletName);
        setUserAddress(userAddress);
      } else {
        setContext({ ...context, isPreviouslySelectedWallet: false });
      }
    };
    selectWalletIfPreviouslyLoggedIn();
  }, [context.isLoaded]);

  useEffect(() => {
    const updateSelectedWalletContext = async () => {
      if (context.isLoaded && selectedWallet && selectedWallet.name) {
        setContext({
          ...context,
          isWalletSelected: true,
          wallet: selectedWallet,
        });
        window.localStorage.setItem("selectedWallet", selectedWallet.name);
      }
    };
    updateSelectedWalletContext();
  }, [context.isLoaded, selectedWallet]);

  useEffect(() => {
    const updateWalletConnectedContext = async () => {
      if (
        context.isWalletSelected &&
        !context.isWalletConnected &&
        userAddress
      ) {
        await checkWallet();
        const checksummedAddress = ethers.utils.getAddress(userAddress);
        const provider = new ethers.providers.Web3Provider(
          context.wallet.provider,
          "any"
        );
        setContext({
          ...context,
          isWalletConnected: true,
          provider,
          signer: await provider.getSigner(checksummedAddress),
          userAddress: checksummedAddress,
        });
        window.localStorage.setItem("userAddress", checksummedAddress);
      }
    };
    updateWalletConnectedContext();
  }, [
    context.isWalletSelected,
    userAddress,
    context.isWalletSelected && context.wallet,
  ]);

  const disconnectWallet = async () => {
    if (context.isWalletSelected) {
      await context.onboard.walletReset();
      window.localStorage.removeItem("selectedWallet");
      window.localStorage.removeItem("userAddress");
      setSelectedWallet(undefined);
      setUserAddress(undefined);
      setContext({
        isLoaded: true,
        isWalletSelected: false,
        isWalletConnected: false,
        isPreviouslySelectedWallet: false,
        onboard: context.onboard,
      });
    }
  };

  const connectWallet = async () => {
    if (context.isLoaded) {
      await context.onboard.walletSelect();
    }
  };

  const checkWallet = async () => {
    if (context.isLoaded) {
      await context.onboard.walletCheck();
    }
  };

  const addVentureToWallet = async (venture: Venture) => {
    if (context.isWalletConnected) {
      try {
        await context.provider.send("wallet_watchAsset", [
          {
            type: "ERC20",
            options: {
              address: await venture.contract.ventureToken(),
              name: `${venture.name} Venture Token`,
              symbol: `v${venture.symbol}`,
              decimals: 18,
              image: `http://localhost:3000/ventures/${venture.symbol}/logo.png`,
            },
          },
        ]);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <WalletContext.Provider
      value={{
        ...context,
        disconnectWallet,
        connectWallet,
        checkWallet,
        addVentureToWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const WalletContext = createContext<WalletContext>({
  isLoaded: false,
  isWalletSelected: false,
  isWalletConnected: false,
  disconnectWallet: async () => {},
  connectWallet: async () => {},
  checkWallet: async () => {},
  addVentureToWallet: async (venture: Venture) => {},
});

export const useWallet = () => useContext(WalletContext);
