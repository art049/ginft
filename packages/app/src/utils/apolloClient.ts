import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { encodeWeb3Token } from "@ginft/web3token";
import { staticConfig } from "../config";

const httpLink = new BatchHttpLink({
  uri: staticConfig.graphqlEndpoint,
});

const authLink = new ApolloLink((operation, forward) => {
  const rawToken = localStorage.getItem("web3token");
  if (rawToken) {
    const web3Token = JSON.parse(rawToken);
    const authorization = encodeWeb3Token(web3Token);
    operation.setContext({
      headers: {
        authorization,
      },
    });
  }
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: false,
});
