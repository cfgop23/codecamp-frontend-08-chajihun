import { fallbackHttpConfig, useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
//export default 값일 때 중괄호 생략
//default는 무조건 하나
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  // const mycolor = "yellow";
  const [mycolor, setMycolor] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) setMycolor(true);
    else setMycolor(false);
    // if (writer) setIsWriter(true);
    // else setIsWriter(false);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) setMycolor(true);
    else setMycolor(false);
    // if (title) setIsTitle(true);
    // else setIsTitle(false);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) setMycolor(true);
    else setMycolor(false);
    // if (contents) setIsContents(true);
    // else setIsContents(false);
  };

  // const onColor = () => {
  //   if (writer && title && contents) setMycolor(true);
  //   else setMycolor(false);
  // };

  // setTimeout(onColor);

  return (
    <BoardWriteUI
      onClickGraphqlApi={onClickGraphqlApi}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
    />
  );
}
