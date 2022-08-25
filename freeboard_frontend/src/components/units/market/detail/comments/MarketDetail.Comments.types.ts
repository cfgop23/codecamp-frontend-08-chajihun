import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface IMarketDetailCommentsUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onFetchMore: () => void;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentsWrite?: () => void;
}

export interface ICommentItemProps {
  el: IUseditemQuestion;
}

export interface ICommentWriteProps {
  isEdit?: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestion;
}
