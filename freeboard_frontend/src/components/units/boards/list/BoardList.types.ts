import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIPros {
  onClickMoveToBoardWrite: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
}
