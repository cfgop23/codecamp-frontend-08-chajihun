import { IBoardProps } from "../../../../pages/14-pagination";
import * as s from "./Pagination.styles";

export default function BoardPage(props: IBoardProps) {
  return (
    <s.Wrapper>
      {props.data?.fetchBoards.map((el: any) => (
        <s.Row key={el._id}>
          <s.Column>{el.writer}</s.Column>
          <s.Column>{el.title}</s.Column>
        </s.Row>
      ))}
    </s.Wrapper>
  );
}
