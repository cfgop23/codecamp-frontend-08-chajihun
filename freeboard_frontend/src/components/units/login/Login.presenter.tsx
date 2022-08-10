import { ILoginUIProps } from "./Login.types";
import * as s from "./Login.styles";

const ADDRESS = ["/findemail", "/findpassword", "/login/signup"];

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <s.Wrapper>
        <s.Title>로그인</s.Title>
        <s.InputWrapper>
          <s.Label>이메일</s.Label>
          <s.Input type="text" onChange={props.onChangeEmail} />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Label>비밀번호</s.Label>
          <s.Input type="password" onChange={props.onChangePassword} />
        </s.InputWrapper>
        <s.ErrorMessage>{props.loginError}</s.ErrorMessage>
        <s.Button onClick={props.onClickLogin}>로그인</s.Button>
      </s.Wrapper>
      <s.Footer>
        <s.FooterButton id={ADDRESS[0]} onClick={props.onClickMenu}>
          이메일 찾기
        </s.FooterButton>
        <s.Bar>|</s.Bar>
        <s.FooterButton id={ADDRESS[1]} onClick={props.onClickMenu}>
          비밀번호 찾기
        </s.FooterButton>
        <s.Bar>|</s.Bar>
        <s.FooterButton id={ADDRESS[2]} onClick={props.onClickMenu}>
          회원가입
        </s.FooterButton>
      </s.Footer>
    </>
  );
}
