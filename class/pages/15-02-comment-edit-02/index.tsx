import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
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
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [myIndex, setMyIndex] = useState([
    false, // index 0
    false, // index 1
    false, // index 2
    false, //  ...
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const aaa = [...myIndex];
    // const aaa  = myIndex // 원본인 myIndex도 같이 변화하기 때문에 리렌더링이 안됨.
    aaa[Number(event.target.id)] = true;
    setMyIndex(aaa);
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <div key={el._id}>
          {myIndex[i] === false && (
            <Row>
              <Column>{el.writer}</Column>
              <Column>{el.title}</Column>
              <button id={String(i)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {myIndex[i] === true && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
