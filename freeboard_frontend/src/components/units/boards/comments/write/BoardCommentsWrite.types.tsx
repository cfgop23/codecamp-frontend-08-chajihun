import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentsWrite: () => void;
  onClickCommentsUpdate: () => void;
  onChangeRating: (value: number) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  writer: string;
  password: string;
  contents: string;
  value: number;
  el?: IBoardComment;
  isEdit?: boolean;
  setValue: Dispatch<SetStateAction<number>>; // 글자 위에 마우스 올려서 확인 가능
}

// export interface IUpdateBoardCommentInput {
//   contents?: string;
//   rating?: number;
// }
