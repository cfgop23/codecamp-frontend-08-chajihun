import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
  };

  const onClickSubmit = async () => {
    if (!name) {
      setNameError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (content === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (name && password && title && content) {
      alert("게시물이 등록되었습니다.");
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: content,
            },
          },
        });

        console.log(result);
        console.log(result.data.createBoard._id);
        router.push(`/freeboard/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!name) {
      setNameError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (content === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (name && password && title && content) {
      try {
        const result = await updateBoard({
          variables: {
            updateBoardInput: {
              title: title,
              contents: content,
            },
            password: password,
            boardId: router.query.detailsId,
          },
        });

        console.log(result);
        console.log(result.data.updateBoard._id);
        router.push(`/freeboard/${result.data.updateBoard._id}`);
        alert(`게시물이 수정되었습니다.`);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    }
  };

  return (
    <BoardWriteUI
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
    />
  );
}
