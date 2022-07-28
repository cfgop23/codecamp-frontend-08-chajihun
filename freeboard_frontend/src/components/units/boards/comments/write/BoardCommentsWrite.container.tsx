import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../../commons/libraries/utils";

import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentsWrite.presenter";

import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  // UPDATE_BOARD_COMMENT,
} from "./BoardCommentsWrite.queries";
import { IBoardCommentWriteProps } from "./BoardCommentsWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState(""); // 타입 명시할 때: useState<type>()
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState<number>(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeRating = (value: number) => {
    setValue(value);
  };

  const onClickCommentsWrite = async () => {
    if (typeof router.query.detailsId !== "string") return;
    if (!writer || !contents) {
      return;
    }

    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: value,
          }, // rating: 별표
          boardId: router.query.detailsId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailsId },
          },
        ],
      });

      console.log(result);
    } catch (error) {
      getErrorMessage(error);
      // if(error instanceof Error) alert(error.message)
    }
    setWriter("");
    setPassword("");
    setContents("");
    setValue(0);
  };

  const onClickCommentsUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (value !== props.el?.rating) updateBoardCommentInput.rating = value;
      if (typeof props.el?._id !== "string") return;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailsId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <BoardCommentWriteUI
      onClickCommentsWrite={onClickCommentsWrite}
      onClickCommentsUpdate={onClickCommentsUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      writer={writer}
      password={password}
      contents={contents}
      value={value}
      setValue={setValue}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
