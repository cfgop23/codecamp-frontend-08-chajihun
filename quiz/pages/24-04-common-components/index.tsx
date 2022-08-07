import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

interface FormValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5자 이내로 작성해주세요.")
    .required("작성자를 입력해주세요."),
  password: yup
    .string()
    .max(8, "비밀번호는 8자리 이하로 작성해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{1,8}/,
      "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다."
    )
    .required("비밀번호를 입력해주세요."),
  title: yup
    .string()
    .max(100, "제목은 100자 이내로 작성해주세요.")
    .required("제목을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 작성해주세요.")
    .required("내용을 입력해주세요."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickButton: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <Input01 type="text" register={register("writer")} />
      <span style={{ color: "red" }}>{formState.errors.writer?.message}</span>
      <br />
      비밀번호: <Input01 type="password" register={register("password")} />
      <span style={{ color: "red" }}>{formState.errors.password?.message}</span>
      <br />
      제목: <Input01 type="text" register={register("title")} />
      <span style={{ color: "red" }}>{formState.errors.title?.message}</span>
      <br />
      내용: <Input01 type="text" register={register("contents")} />
      <span style={{ color: "red" }}>{formState.errors.contents?.message}</span>
      <br />
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}
