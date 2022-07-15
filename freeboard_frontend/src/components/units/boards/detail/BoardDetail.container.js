import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detailsId,
    },
  });

  console.log(data);
  console.log(router);

  const onClickUpdate = () => {
    router.push(`/freeboard/${router.query.detailsId}/edit`);
  };

  return <BoardDetailUI data={data} onClickUpdate={onClickUpdate} />;
}
