import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { Modal } from "antd";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

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
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    if (!accessToken) {
      alert("로그인에 실패하였습니다.");
      return;
    }
    setAccessToken(accessToken);
    alert("로그인에 성공하였습니다.");
    localStorage.setItem("accessToken", accessToken);

    if (localStorage.getItem("boards")) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickMove = () => {
    router.push("/26-01-basket/list");
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title=""
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <button key="move" onClick={onClickMove}>
            이동하기
          </button>,
          <button key="back" onClick={handleCancel}>
            돌아가기
          </button>,
        ]}
      >
        <div>
          비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?
        </div>
      </Modal>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
