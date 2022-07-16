import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentsUI from "./BoardComments.presenter";

import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  FETCH_BOARD,
} from "./BoardComments.queries";

export default function BoardComments() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.detailsId,
    },
  });

  console.log(data);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickComments = async () => {
    if (!writer || !contents) {
      return;
    }

    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: { writer, contents, rating: 1 },
          boardId: router.query.detailsId,
        },
      });
      router.push(`/freeboard/${router.query.detailsId}`);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BoardCommentsUI
      onClickComments={onClickComments}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      data={data}
    />
  );
}
