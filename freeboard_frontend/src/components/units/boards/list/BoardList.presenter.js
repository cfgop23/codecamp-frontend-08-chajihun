import { getDate } from "../../../../commons/libraries/utils";
import * as s from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <s.Wrapper>
      <s.Title>우리들 게시판</s.Title>
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
            <s.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </s.ColumnTitle>
            <s.Column>{el.writer}</s.Column>
            <s.ColumnDate>{getDate(el.createdAt)}</s.ColumnDate>
          </s.Row>
        ))}
      </s.Table>
      <s.Footer>
        <s.Button onClick={props.onClickMoveToBoardWrite}>글쓰기</s.Button>
      </s.Footer>
    </s.Wrapper>
  );
}
