import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [abled, setAbled] = useState(true);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: writer,
          title: title,
          contents: contents,
        },
      });

      router.push(
        `/05-08-dynamic-routed-board-query/${result.data.createBoard.number}`
      );
      console.log(result.data.createBoard.number);
      console.log(result.data.createBoard.message);
    } catch (error) {
      console.log(error.message);
      alert("error");
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setAbled(false);
    }
  };
  // const onChangeAble = (event) => {
  //   if (setWriter === true && setTitle === true && setContents === true) {
  //     setAbled("");
  //   }
  // };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button disabled={abled} onClick={onClickGraphqlApi}>
        게시글 이동하기
      </button>
    </>
  );
}
