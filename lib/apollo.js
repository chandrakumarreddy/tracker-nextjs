import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-fetch";
import Head from "next/head";

export function withApollo(WrapperComponent) {
  function WithApollo({ apolloClient, apolloState, ...pageProps }) {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <WrapperComponent {...pageProps} />
      </ApolloProvider>
    );
  }
  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apollClient = initApolloClient());
    let pageProps = {};
    if (WrapperComponent.getInitialProps) {
      pageProps = await WrapperComponent.getInitialProps(ctx);
    }
    if (typeof window === "undefined") {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }
    }
    try {
      const { getDataFromTree } = await import("@apollo/react-ssr");
      await getDataFromTree(
        <AppTree
          pageProps={{
            ...pageProps,
            apolloClient
          }}
        />
      );
      Head.rewind();
    } catch (e) {
      console.error(e);
    }
    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState
    };
  };
  return WithApollo;
}

const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === "undefined";
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    ssrMode,
    link: createHttpLink({ uri: "http://localhost:3000/api/graphql", fetch }),
    cache
  });
  return client;
};
