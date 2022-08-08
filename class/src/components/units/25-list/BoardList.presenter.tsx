import { getDate } from "../../../../commons/libraries/utils";
import * as s from "./BoardList.styles";
import { IBoardListUIPros } from "./BoardList.types";
import Pagination from "../../../commons/paginations/Pagination.container";
import SearchDebounce from "../../../commons/searchbars/debounce/SearchDebounce.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIPros) {
  return (
    <s.Wrapper>
      <s.Title>코드캠프 게시판</s.Title>
      <s.SearchBar>
        <SearchDebounce
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
      </s.SearchBar>
      <s.Table>
        <s.RowHead>
          <s.ColumnHeaderId>ID</s.ColumnHeaderId>
          <s.ColumnHeaderTitle>제목</s.ColumnHeaderTitle>
          <s.ColumnHeaderWriter>작성자</s.ColumnHeaderWriter>
          <s.ColumnHeaderDate>작성시간</s.ColumnHeaderDate>
        </s.RowHead>
        {props.data?.fetchBoards.map((el, i) => (
          <s.Row key={el._id}>
            <s.ColumnId>{String(el._id).slice(-4).toUpperCase()}</s.ColumnId>
            <s.ColumnTitle
              onClick={props.onClickMoveToPage(`/freeboard/${el._id}`)}
            >
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{ color: props.keyword === el ? "red" : "black" }}
                  >
                    {el}
                  </span>
                ))}
            </s.ColumnTitle>
            <s.Column>{el.writer}</s.Column>
            <s.ColumnDate>{getDate(el.createdAt)}</s.ColumnDate>
          </s.Row>
        ))}
      </s.Table>
      <s.Footer>
        <div></div>
        <Pagination refetch={props.refetch} count={props.count} />
        <s.Button onClick={props.onClickMoveToPage("/freeboard/write")}>
          글쓰기
        </s.Button>
      </s.Footer>
    </s.Wrapper>
  );
}
