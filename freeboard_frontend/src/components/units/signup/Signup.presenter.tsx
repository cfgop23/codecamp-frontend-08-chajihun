import * as s from "./Signup.styles";
import { SignupUIProps } from "./Signup.types";

export default function SignupUI(props: SignupUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickButton)}>
      이메일:{" "}
      <input
        type="text"
        {...props.register("email", { required: true })}
      ></input>
      <span style={{ color: "red" }}>
        {props.formState.errors.email?.message}
      </span>
      <br />
      비밀번호:{" "}
      <input
        type="password"
        {...props.register("password", { required: true })}
      />
      <span style={{ color: "red" }}>
        {props.formState.errors.password?.message}
      </span>
      <br />
      비밀번호 확인:{" "}
      <input
        type="password"
        {...props.register("passwordCheck", { required: true })}
      />
      <span style={{ color: "red" }}>
        {props.formState.errors.passwordCheck?.message}
      </span>
      <br />
      이름:{" "}
      <input type="text" {...props.register("name", { required: true })} />
      <span style={{ color: "red" }}>
        {props.formState.errors.name?.message}
      </span>
      <button>등록하기</button>
    </form>
  );
}
