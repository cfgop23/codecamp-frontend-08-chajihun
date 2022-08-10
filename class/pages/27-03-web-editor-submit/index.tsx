// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // redQuill의 onChange를 쓸 수 없어서 ...register 불가능, 그래서 강제로 값을 넣어주는 기능인 setValue를 통해 실행
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐다고 react-hook-form에 강제로 알려주는 기능.(모드를 인식할 수 있게 해줌.)
    trigger("contents");
  };

  const onClickCreate = async (data: any) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
  };

  return (
    <form onSubmit={handleSubmit(onClickCreate)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      {/* 여기서 onChange는 임의로 정할 수 없다. 라이브러리 자체 함수임. */}
      <br />
      <button>등록하기</button>
    </form>
  );
}
