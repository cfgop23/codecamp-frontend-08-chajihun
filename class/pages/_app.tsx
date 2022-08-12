// import "../styles/globals.css";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSettings from "../src/components/commons/apollo";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAratwTOEUX2Ev70cLzxVLG6xZgSQKedGY",
  authDomain: "codecamp-frontend08-cjh.firebaseapp.com",
  projectId: "codecamp-frontend08-cjh",
  storageBucket: "codecamp-frontend08-cjh.appspot.com",
  messagingSenderId: "291437687556",
  appId: "1:291437687556:web:1fbc4950676e9bc06e5651",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head> 모든 페이지에서 카카오맵을 다운로드 받아므로 비효율적임.
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a240da9ad17a5376ac92fb0e03a9d3dc"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSettings>
          {/* <ApolloProvider client={client}> */}
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
            {/* Component : 우리가 접속한 페이지 컴포넌트 */}
          </Layout>
          {/* </ApolloProvider> */}
        </ApolloSettings>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
