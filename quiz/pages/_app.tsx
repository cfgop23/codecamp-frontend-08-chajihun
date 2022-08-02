// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
          {/* Component : 우리가 접속한 페이지 컴포넌트 */}
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
