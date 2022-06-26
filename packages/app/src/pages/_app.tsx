import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { UserNFTsProvider } from "src/hooks/useUserNFTs";
import { WalletProvider } from "src/hooks/useWallet";
import { theme } from "src/theme";
import { ErrorCatcher } from "../components/ErrorBoundary";
import "../global.css";
import { TransactionProvider } from "../hooks/useTransaction";
import { apolloClient } from "../utils/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GiNFT</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ErrorCatcher>
          <WalletProvider>
            <UserNFTsProvider>
              <ApolloProvider client={apolloClient}>
                <TransactionProvider>
                  <Component {...pageProps} />
                </TransactionProvider>
              </ApolloProvider>
            </UserNFTsProvider>
          </WalletProvider>
        </ErrorCatcher>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
