import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickComments: () => void;
  onClickCommentsUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCommentsDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeRating: (value: number) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  writer: string;
  password: string;
  contents: string;
  value: number;
}
