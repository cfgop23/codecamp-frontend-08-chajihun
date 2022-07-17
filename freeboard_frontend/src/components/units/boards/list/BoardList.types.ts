import React, { ChangeEvent, MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIPros {
  onClickMoveToBoardWrite: () => void;
  onClickMoveToBoardDetail: (event: React.MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
}
