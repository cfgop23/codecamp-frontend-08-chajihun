import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);

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
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (!accessToken) {
        return;
      }
      setAccessToken(accessToken);
      alert("로그인에 성공하였습니다.");
      router.push("/22-01-login/login-success");
    } catch (error) {
      router.push("/22-01-login/login-success");
    }
  };

  //   const result = await loginUser({
  //     variables: { email, password },
  //   });
  //   const accessToken = result.data?.loginUser.accessToken;
  //   console.log(accessToken);

  //   setAccessToken(accessToken);
  //   alert("로그인에 성공하였습니다.");
  //   router.push("/22-01-login/login-success");
  // };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
