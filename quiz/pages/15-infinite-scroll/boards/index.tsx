import styled from "@emotion/styled";
import { IBoardsPageProps } from "..";
import { getDate } from "../../../src/commons/libraries/utils";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BoardsPage(props: IBoardsPageProps) {
  return (
    <>
      {props.data?.fetchBoards.map((el, i) => (
        <Row key={el._id}>
          <Column>{i}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{getDate(el.createdAt)}</Column>
        </Row>
      )) || <div></div>}
    </>
  );
}
