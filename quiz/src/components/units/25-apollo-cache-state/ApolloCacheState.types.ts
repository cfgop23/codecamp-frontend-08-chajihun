import { IQuery } from "../../../commons/types/generated/types";

export interface Data {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export interface ApolloCacheStateUIProps {
  onClickDelete: (boardId: string) => () => void;
  onClickCreate: (data: Data) => void;
  data?: Pick<IQuery, "fetchBoards">;
}

export interface FormValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
}
