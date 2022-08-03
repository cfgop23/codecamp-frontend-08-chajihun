// import "../styles/globals.css";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSettings from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
          {/* Component : 우리가 접속한 페이지 컴포넌트 */}
        </Layout>
      </ApolloSettings>
    </RecoilRoot>
  );
}

export default MyApp;
