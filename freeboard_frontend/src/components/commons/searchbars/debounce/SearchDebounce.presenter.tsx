import { SearchbarInput } from "./SearchDebounce.styles";
import { ISearchDebounceUIProps } from "./SearchDebounce.types";

export default function SearchDebounceUI(props: ISearchDebounceUIProps) {
  return (
    <SearchbarInput
      placeholder="🔍 &nbsp;Search"
      onChange={props.onChangeSearch}
    />
  );
}
