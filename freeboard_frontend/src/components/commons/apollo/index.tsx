import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingsProps {
  children: ReactNode;
}

export default function ApolloSettings(props: IApolloSettingsProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    const userInfo = localStorage.getItem("userInfo");
    setAccessToken(accessToken);

    if (!accessToken || !userInfo) return;
    setUserInfo(JSON.parse(userInfo));
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  // prettier-ignore
  return <ApolloProvider client={client}>
      {props.children}
      </ApolloProvider>;
}
