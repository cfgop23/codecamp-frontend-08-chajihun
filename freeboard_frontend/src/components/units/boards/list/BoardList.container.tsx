import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import React, { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardWrite = () => {
    router.push("/freeboard/write");
  };

  const onClickMoveToBoardDetail = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    router.push(`/freeboard/${(event.target as HTMLDivElement).id}`);
  };

  console.log(data);
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardWrite={onClickMoveToBoardWrite}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
