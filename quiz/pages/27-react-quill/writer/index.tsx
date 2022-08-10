import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import * as s from "./writer.styles";

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

type FieldValues = Record<string, any>;

export default function ReactQuillWriterPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickCreate: SubmitHandler<FieldValues> = async (data) => {
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
    console.log(data);
    router.push(`/27-react-quill/detail/${result.data.createBoard._id}`);
  };

  return (
    <s.Form onSubmit={handleSubmit(onClickCreate)}>
      <div>
        작성자: <s.Input type="text" {...register("writer")} />
        비밀번호: <s.Input type="password" {...register("password")} />
      </div>
      제목: <s.TitleInput type="text" {...register("title")} />
      <div>내용</div>
      <ReactQuill
        style={{ width: "490px", height: "400px" }}
        onChange={onChangeContents}
      />
      <s.Button>등록하기</s.Button>
    </s.Form>
  );
}
