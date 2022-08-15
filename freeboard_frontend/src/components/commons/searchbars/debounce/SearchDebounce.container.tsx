import { ChangeEvent } from "react";
import _ from "lodash";
import { ISearchDebounceProps } from "./SearchDebounce.types";
import SearchDebounceUI from "./SearchDebounce.presenter";

export default function SearchDebounce(props: ISearchDebounceProps) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    // props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 300);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchDebounceUI onChangeSearch={onChangeSearch} />;
}
