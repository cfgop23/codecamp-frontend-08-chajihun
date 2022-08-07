import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onClickButton = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")}></input>
      제목: <input type="text" {...register("title")}></input>
      내용: <input type="text" {...register("contents")}></input>
      {/* 주소입력: <input type="text" {...register("boardAddress.addressDetail")}/> */}
      <button>등록하기</button>
    </form>
  );
}

/* form태그 안에서 버튼 디폴트 타입은 sumbit */
/* <button type="button" onClick={onClickMove}>페이지 이동하기</button> */
/* <button type="reset">등록하기</button> */
