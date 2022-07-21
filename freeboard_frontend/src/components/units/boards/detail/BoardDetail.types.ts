import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickUpdate: () => void;
  onClickMoveToBoards: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
