import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IIsActiveProps {
  isActive: boolean;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IBoardWriteUIProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
  nameError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isEdit: boolean;
  isActive: boolean;
}
