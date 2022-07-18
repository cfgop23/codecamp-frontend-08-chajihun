import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickComments: () => void;
  onClickCommentsDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}
