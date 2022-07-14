import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
//export default 값일 때 중괄호 생략
//default는 무조건 하나
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  // const mycolor = "yellow";
  const [mycolor, setMycolor] = useState(false);

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickCreate = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables = {
      number: Number(router.query.number),
    };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(`/09-01-boards/${result.data.updateBoard.number}`);
    // ${router.query.number} 를 써도 똑같음
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
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
