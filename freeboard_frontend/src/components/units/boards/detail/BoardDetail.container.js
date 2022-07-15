import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BOARDS, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

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

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    router.push(`/freeboard/`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickUpdate={onClickUpdate}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickDelete={onClickDelete}
    />
  );
}
