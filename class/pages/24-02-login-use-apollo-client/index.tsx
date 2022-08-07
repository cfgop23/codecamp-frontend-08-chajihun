import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();
  const client = useApolloClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인해서 토큰 받아오기
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인에 실패하였습니다.");
      return;
    }

    // 2. 로그인 토큰으로 유저정보 받아오기
    // use를 사용하는 것은 await를 못 씀.
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // ApolloSettings까지 못가서 강제로 해줌
        },
      },
    });

    const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken); // 임시사용(나중에 지울 예정)
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인에 성공하였습니다.");
    router.push("/24-03-login-use-apollo-client-success");
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
