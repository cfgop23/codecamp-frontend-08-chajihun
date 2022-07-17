import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentsUI from "./BoardComments.presenter";

import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComments.queries";

export default function BoardComments() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.detailsId,
    },
  });

  console.log(data);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickComments = async () => {
    if (!writer || !contents) {
      return;
    }

    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: { writer, password, contents, rating: 1 },
          boardId: String(router.query.detailsId),
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
    }
  };

  const onClickCommentsDelete = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    prompt("비밀번호를 입력해주세요.");
    deleteBoardComment({
      variables: {
        password,
        boardCommentId: (event.target as HTMLButtonElement).id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.detailsId },
        },
      ],
    });
  };

  return (
    <BoardCommentsUI
      onClickComments={onClickComments}
      onClickCommentsDelete={onClickCommentsDelete}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      data={data}
    />
  );
}
