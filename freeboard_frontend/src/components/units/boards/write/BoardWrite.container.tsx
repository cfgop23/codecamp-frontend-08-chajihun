import React, { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { getErrorMessage } from "../../../../commons/libraries/utils";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }

    if (event.target.value && password && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }

    if (name && event.target.value && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");

      if (name && password && event.target.value && content) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }

    if (name && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
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
        console.log(result.data?.createBoard._id);
        router.push(`/freeboard/${result.data?.createBoard._id}`);
      } catch (error) {
        getErrorMessage(error);
      }
    }
  };

  const onClickUpdate = async () => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (content) updateBoardInput.contents = content;

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return;
    }
    // if (props.data?.fetchBoard.title) {
    //   setContentsError("");
    // } else {
    //   setContentsError("제목을 입력해주세요.");
    // }

    if (updateBoardInput) {
      try {
        const result = await updateBoard({
          variables: {
            updateBoardInput: updateBoardInput,
            password: password,
            boardId: String(router.query.detailsId),
          },
        });

        console.log(result);
        console.log(result.data?.updateBoard._id);
        router.push(`/freeboard/${result.data?.updateBoard._id}`);
        alert(`게시물이 수정되었습니다.`);
      } catch (error) {
        getErrorMessage(error);
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
      isActive={isActive}
      data={props.data}
    />
  );
}
