import * as a from "./Signup.styles";
import * as s from "../login/Login.styles";
import { SignupUIProps } from "./Signup.types";
import ButtonSubmit from "../../commons/buttons/submit";
import InputLogin from "../../commons/inputs/login";

export default function SignupUI(props: SignupUIProps) {
  return (
    <a.Form onSubmit={props.handleSubmit(props.onClickButton)}>
      <a.Title>회원가입</a.Title>
      <s.InputWrapper>
        <s.Label>이메일</s.Label>
        <InputLogin
          type="text"
          register={props.register("email", { required: true })}
        ></InputLogin>
      </s.InputWrapper>
      <a.ErrorMessage style={{ color: "red" }}>
        {props.formState.errors.email?.message}
      </a.ErrorMessage>
      <s.InputWrapper>
        <s.Label>비밀번호</s.Label>
        <InputLogin
          type="password"
          register={props.register("password", { required: true })}
        ></InputLogin>
      </s.InputWrapper>
      <a.ErrorMessage style={{ color: "red" }}>
        {props.formState.errors.password?.message}
      </a.ErrorMessage>
      <s.InputWrapper>
        <s.Label>비밀번호 확인</s.Label>
        <InputLogin
          type="password"
          register={props.register("passwordCheck", { required: true })}
        ></InputLogin>
      </s.InputWrapper>
      <a.ErrorMessage style={{ color: "red" }}>
        {props.formState.errors.passwordCheck?.message}
      </a.ErrorMessage>
      <s.InputWrapper>
        <s.Label>이름</s.Label>
        <InputLogin
          type="text"
          register={props.register("name", { required: true })}
        ></InputLogin>
      </s.InputWrapper>
      <a.ErrorMessage style={{ color: "red" }}>
        {props.formState.errors.name?.message}
      </a.ErrorMessage>
      <ButtonSubmit name="회원가입"></ButtonSubmit>
    </a.Form>
  );
}
