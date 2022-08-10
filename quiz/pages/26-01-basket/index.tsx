import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { uniqueId } from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import BasketButton from "./button";

const FETCH_BOARDS = gql`
  query fetchBoardS {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <Row key={uniqueId()}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <BasketButton el={el} id={el._id} />
        </Row>
      ))}
    </>
  );
}
