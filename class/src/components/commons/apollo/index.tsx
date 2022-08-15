import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

// 초기화 방지를 위해 함수 밖에 배치
const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingsProps {
  children: ReactNode;
}

export default function ApolloSettings(props: IApolloSettingsProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("지금은 브라우저다.");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  // } else {
  //   console.log("지금은 프론트 서버다.(즉, yarn dev 프로그램 내부다.)");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  // }

  // // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("지금은 브라우저다.");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  // } else {
  //   console.log("지금은 프론트 서버다.(즉, yarn dev 프로그램 내부다.)");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    // 1. 기존방식
    // console.log("지금은 브라우저다.");
    // const accessToken = localStorage.getItem("accessToken") || "";
    // const userInfo = localStorage.getItem("userInfo");
    // setAccessToken(accessToken);

    // if (!accessToken || !userInfo) return;
    // setUserInfo(JSON.parse(userInfo)); // 객체형태로 복구

    // 2. 새로운 방식(refresh)
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // apollo 세팅이 완료된 상태에서 useMutation, useQuery, useApolloClient 등 사용가능.
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken 재발급
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken 저장
              setAccessToken(newAccessToken);
              // 3-1. 재발급 받은 accessToken으로 실패한 query 재요청(토큰 바꿔치기)
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새 것으로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 재발급 받은 accessToken으로 실패한 query 재요청(변경된 operation 재요청)
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql", // refreshToken 쓸 때, https로 해야함
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 백엔드에 쿠키 전달
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서! errorLink가 먼저 나와야 함.
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
