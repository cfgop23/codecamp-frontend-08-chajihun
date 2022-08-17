import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isActiveState,
  userInfoState,
} from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginUI from "./SignIn.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./SignIn.queries";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [, setIsActive] = useRecoilState(isActiveState);

  const router = useRouter();
  const client = useApolloClient();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && password) {
      setIsActive(true);
    } else setIsActive(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value && email) {
      setIsActive(true);
    } else setIsActive(false);
  };

  const onClickLogin = async () => {
    if (!email) {
      setLoginError("이메일을 입력하세요.");
      return;
    }

    try {
      const result = await loginUser({
        variables: { email, password },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        setLoginError("이메일 또는 비밀번호를 잘못 입력했습니다.");
        return;
      }

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

      setAccessToken(accessToken);
      setUserInfo(userInfo);
      setIsActive(false);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      router.push("/");
    } catch (error) {
      setLoginError("이메일 또는 비밀번호를 잘못 입력했습니다.");
    }
  };

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) router.push(event.target.id);
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMenu={onClickMenu}
      loginError={loginError}
    />
  );
}
