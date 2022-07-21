import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import BoardPage from "../../src/components/units/14-pagination/Board";
import PaginationPage from "../../src/components/units/14-pagination/Pagination";

const FETCH_BOARDS = gql`
  query fetchBoardS($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export interface IBoardProps {
  data?: Pick<IQuery, "fetchBoards">;
}

export interface IPaginationProps {
  refetch: any;
  lastPage: number;
}

export default function ParentPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10)
    : 1;

  return (
    <>
      <BoardPage data={data} />
      <PaginationPage refetch={refetch} lastPage={lastPage} />
    </>
  );
}
