import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardWrite = () => {
    router.push("/freeboard/write");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/freeboard/${(event.target as HTMLDivElement).id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardWrite={onClickMoveToBoardWrite}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
