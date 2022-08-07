import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),

  // email: yup
  //   .string()
  //   .email("이메일 형식에 적합하지 않습니다.")
  //   .required("이메일은 필수입니다."),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
  //   .max(15, "비밀번호는 최대 15자리입니다.")
  //   .required("비밀번호를 입력해주세요."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "전화번호 형식에 맞지 않습니다."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickButton = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")}></input>
      <div>{formState.errors.writer?.message}</div>
      비밀번호: <input type="password" {...register("password")}></input>
      <div>{formState.errors.password?.message}</div>
      제목: <input type="text" {...register("title")}></input>
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")}></input>
      <div>{formState.errors.contents?.message}</div>
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
      {/* 이메일: <input type="text" {...register("email")}></input>
      <div>{formState.errors.email?.message}</div> */}
    </form>
  );
}

/* form태그 안에서 버튼 디폴트 타입은 sumbit */
/* <button type="button" onClick={onClickMove}>페이지 이동하기</button> */
/* <button type="reset">등록하기</button> */
