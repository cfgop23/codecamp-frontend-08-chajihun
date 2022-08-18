import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: "62fd9eb003562900296b2ec2" },
  });
  // cmd + shift + l : 같은 단어 선택

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "62fd9eb003562900296b2ec2" },
      //   refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: "62fd9eb003562900296b2ec2" } }],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "62fd9eb003562900296b2ec2" },
          data: {
            fetchBoard: {
              _id: "62fd9eb003562900296b2ec2",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 수(카운트): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요</button>
    </>
  );
}
