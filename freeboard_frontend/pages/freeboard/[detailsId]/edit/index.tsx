import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/boards/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function FreeboardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detailsId },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
