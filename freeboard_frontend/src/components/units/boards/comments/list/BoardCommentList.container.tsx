import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { getErrorMessage } from "../../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();

  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.detailsId),
    },
  });

  console.log(data);

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

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      <BoardCommentListUI
        data={data}
        onClickCommentsDelete={onClickCommentsDelete}
        onFetchMore={onFetchMore}
      />
    </>
  );
}
