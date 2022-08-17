import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_USER } from "./Signup.queries";
import { FormValue } from "./Signup.types";
import SignupUI from "./Signup.presenter";
import { getErrorMessage } from "../../../../commons/libraries/utils";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력하세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}/,
      "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
    )
    .required("비밀번호를 입력하세요."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 입력사항입니다."),
  name: yup.string().required("이름을 입력하세요."),
});

export default function Signup() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickButton: SubmitHandler<FormValue> = async (data) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(result);
      alert("회원가입이 완료되었습니다.");
      router.push(`/login`);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
    />
  );
}
