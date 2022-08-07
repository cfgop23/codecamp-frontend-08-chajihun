import { SubmitHandler, useForm } from "react-hook-form";

interface FormValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function ReactHookFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onClickButton: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자:{" "}
      <input
        type="text"
        {...register("writer", { required: "이름을 입력해주세요." })}
      ></input>
      {/* {errors.writer?.type === "required" && (
        <span style={{ color: "red" }}>이름을 입력해주세요</span>
      )} */}
      <span style={{ color: "red" }}>{errors.writer?.message}</span>
      <br />
      비밀번호:{" "}
      <input type="password" {...register("password", { required: true })} />
      {errors.password?.type === "required" && (
        <span style={{ color: "red" }}>비밀번호를 입력해주세요</span>
      )}
      <br />
      제목:{" "}
      <input type="text" {...register("title", { required: true })}></input>
      {errors.title?.type === "required" && (
        <span style={{ color: "red" }}>제목을 입력해주세요</span>
      )}
      <br />
      내용:{" "}
      <input type="text" {...register("contents", { required: true })}></input>
      {errors.contents?.type === "required" && (
        <span style={{ color: "red" }}>내용을 입력해주세요</span>
      )}
      <br />
      <button>등록하기</button>
    </form>
  );
}
