import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import React, { useState } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detailsId,
    },
  });

  console.log(data);

  const onClickUpdate = () => {
    router.push(`/freeboard/${router.query.detailsId}/edit`);
  };
  const onClickMoveToBoards = () => {
    router.push("/freeboard");
  };

  const onClickDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await deleteBoard({
      variables: { boardId: (event.target as HTMLButtonElement).id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    router.push(`/freeboard/`);
  };

  const onClickLike = async () => {
    if (!like) return;
    await likeBoard({
      variables: { boardId: String(router.query.detailsId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.detailsId } },
      ],
    });
    setLike(false);
  };

  const onClickDislike = async () => {
    if (!dislike) return;
    await dislikeBoard({
      variables: { boardId: String(router.query.detailsId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.detailsId } },
      ],
    });
    setDislike(false);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickUpdate={onClickUpdate}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
