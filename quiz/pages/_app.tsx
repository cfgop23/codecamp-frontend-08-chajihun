// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
        {/* Component : 우리가 접속한 페이지 컴포넌트 */}
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;