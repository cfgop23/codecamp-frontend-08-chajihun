import { MouseEvent } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickCommentsDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onFetchMore: () => void;
}

export interface IBoardCommentListUIItemProps {
  el: IBoardComment;
  onClickCommentsDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
