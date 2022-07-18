import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentsUI from "./BoardComments.presenter";

import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardComments.queries";

export default function BoardComments() {
  const router = useRouter();
  const [writer, setWriter] = useState(""); //타입 명시할 때: useState<type>()
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState<number>(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.detailsId),
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
          }, //rating: 별표
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

  const onClickCommentsDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    // if(!(event.target instanceof HTMLButtonElement)) return
    const myPassword = prompt("비밀번호를 입력해주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: (event.target as HTMLButtonElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailsId },
          },
        ],
      });
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <BoardCommentsUI
      onClickComments={onClickComments}
      // onClickCommentsUpdate={onClickCommentsUpdate}
      onClickCommentsDelete={onClickCommentsDelete}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      data={data}
      writer={writer}
      password={password}
      contents={contents}
      value={value}
    />
  );
}
