import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../../commons/libraries/utils";

import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentsWrite.presenter";

import {
  CREATE_BOARD_COMMENT,
  // UPDATE_BOARD_COMMENT,
} from "./BoardCommentsWrite.queries";

export default function BoardCommentWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState(""); // 타입 명시할 때: useState<type>()
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState<number>(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

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

  const onClickComments = async () => {
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

  // const onClickCommentsUpdate = async (
  //   event: MouseEvent<HTMLButtonElement>
  // ) => {
  //   const myPassword = prompt("비밀번호를 입력해주세요.");

  //   try {
  //     await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput: {
  //           contents,
  //           rating: value,
  //         },
  //         password,
  //         boardCommentId: (event.target as HTMLButtonElement).id,
  //       },
  //     });
  //   } catch (error) {
  //     getErrorMessage(error);
  //   }
  // };

  return (
    <BoardCommentWriteUI
      onClickComments={onClickComments}
      // onClickCommentsUpdate={onClickCommentsUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      writer={writer}
      password={password}
      contents={contents}
      value={value}
    />
  );
}
