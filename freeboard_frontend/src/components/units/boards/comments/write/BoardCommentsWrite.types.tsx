import { ChangeEvent } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";
export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickComments: () => void;
  // onClickCommentsUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeRating: (value: number) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  writer: string;
  password: string;
  contents: string;
  value: number;
  el?: IBoardComment;
  // setValue: Dispatch ~ 글자 위에 마우스 올려서 확인 가능
}
