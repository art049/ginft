import {
  Button as ChakraButton,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useWallet } from "src/hooks/useWallet";
import { apolloClient } from "src/utils/apolloClient";
import { formatHexAddress } from "../util";

export const Button: typeof ChakraButton = (props) => {
  const buttonSize = useBreakpointValue({ base: "sm", xs: "sm", md: "md" });
  return <ChakraButton size={buttonSize} {...props} />;
};

export const PrimaryButton: typeof ChakraButton = (props) => {
  return (
    <Button
      variant="solid"
      color="text.light"
      bg="demos.gradient.default"
      size="sm"
      _hover={{ bg: "demos.gradient.hover" }}
      {...props}
    />
  );
};

export const SecondaryButton: typeof ChakraButton = (props) => {
  return (
    <Button
      variant="outline"
      color="demos.primary"
      _hover={{ bg: "purple.100" }}
      size="sm"
      borderColor="demos.primary"
      {...props}
    />
  );
};

export const ConnectWalletButton = () => {
  const wallet = useWallet();
  const router = useRouter();
  const connectWallet = async () => wallet.isLoaded && wallet.connectWallet();

  const disconnectWallet = () => {
    if (wallet.isLoaded) {
      wallet.disconnectWallet();
      apolloClient.clearStore();
    }
  };

  if (!wallet.isWalletConnected) {
    return (
      <PrimaryButton onClick={connectWallet}>Connect Wallet</PrimaryButton>
    );
  }

  return (
    <>
      <Button
        onClick={disconnectWallet}
        variant="ghost"
        colorScheme="purple"
        mr={2}
      >
        Logout
      </Button>
      <Button color="gray.700">
        <Skeleton
          isLoaded={wallet.isWalletConnected}
          w="100%"
          minW="124px"
          height={4}
        >
          {wallet.isWalletConnected && formatHexAddress(wallet.userAddress)}
        </Skeleton>
      </Button>
    </>
  );
};
