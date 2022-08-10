import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import { getDateYearDay } from "../../src/commons/libraries/utils";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoardS {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function todayPage() {
  const [todays, setTodays] = useState<IBoard[]>([]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickToday = (data: IBoard) => () => {
    const todays = JSON.parse(localStorage.getItem("todays") || "[]");

    setTodays(todays);

    const temp = todays.filter((el: any) => el._id === data._id);
    if (temp.length === 1) {
      return;
    }

    const result = {
      _id: data._id,
      writer: data.writer,
      title: data.title,
      createdAt: getDateYearDay(data.createdAt),
    };

    todays.push(result);

    localStorage.setItem("todays", JSON.stringify(todays));
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("todays") || "[]");
    setTodays(result);
  }, []);

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={uniqueId()} onClick={onClickToday(el)}>
            <Column>{el._id}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </div>
      <div style={{ margin: "50px" }}>
        {todays.map((el) => (
          <Row key={uniqueId()}>
            <Column>{el._id}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
