import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
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
        <title>Demos Ventures | Alpha</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ErrorCatcher>
          <WalletProvider>
            <ApolloProvider client={apolloClient}>
              <TransactionProvider>
                <Component {...pageProps} />
              </TransactionProvider>
            </ApolloProvider>
          </WalletProvider>
        </ErrorCatcher>
      </ChakraProvider>
    </>
  );
}
export default MyApp;

if (process.env.NEXT_PUBLIC_ENV === "preview") {
  MyApp.getInitialProps = async (ctx: AppContext) => {
    // Force SSR everywhere
    return { ...(await App.getInitialProps(ctx)) };
  };
}
