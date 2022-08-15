import { ChangeEvent } from "react";

export interface ISearchDebounceProps {
  refetch: any;
  refetchBoardsCount?: any;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchDebounceUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
