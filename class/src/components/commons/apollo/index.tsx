import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

interface IApolloSettingsProps {
  children: ReactNode;
}

export default function ApolloSettings(props: IApolloSettingsProps) {
  const [accessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  // prettier-ignore
  return <ApolloProvider client={client}>
    {props.children}
    </ApolloProvider>;
}
