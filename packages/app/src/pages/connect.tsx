import { Box, Center, VStack } from "@chakra-ui/react";
import { useUserLazyQuery } from "@generated/graphql/hooks";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWallet } from "src/hooks/useWallet";
import { PrimaryButton } from "../components/Button";
import { Logo } from "../components/Logo";
import TriangleBackground from "../components/triangle-background.svg";
import useIdentityVerification from "../hooks/useIdentityVerification";
import useWeb3Token from "../hooks/useWeb3Token";
const Connect: NextPage = () => {
  const router = useRouter();
  const wallet = useWallet();
  const identityVerification = useIdentityVerification();
  const web3Token = useWeb3Token();
  const [fetchUser, { data, error, loading }] = useUserLazyQuery();
  useEffect(() => {
    if (wallet.isWalletConnected && web3Token.web3Token) {
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.isWalletConnected, web3Token.web3Token]);

  useEffect(() => {
    if (
      wallet.isWalletConnected &&
      identityVerification.loaded &&
      web3Token.loaded &&
      data
    ) {
      console.log(data, identityVerification);
      if (
        identityVerification.verified &&
        data.user &&
        data.user.eulaAccepted &&
        data.user.identityVerified
      )
        router.push("/");
      else router.push("/verify");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    wallet.isWalletConnected,
    identityVerification.loaded,
    web3Token.loaded,
    web3Token.web3Token,
    router,
    data,
  ]);
  return (
    <>
      {/* The background is rendered here for performance reasons. */}
      <TriangleBackground
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
        }}
      />
      <Box width="100vw" height="100vh" padding="100px">
        <Center h="100%">
          <VStack spacing="50px">
            <Logo light size="lg" />
            <PrimaryButton
              isLoading={wallet.isWalletSelected}
              loadingText="Connecting"
              onClick={wallet.connectWallet}
            >
              Connect Wallet
            </PrimaryButton>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Connect;
