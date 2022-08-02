import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyTest() {
  const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "network-only" });
  //   const { data } = useQuery(FETCH_BOARDS, {fetchPolicy: "network-only"}); // fetchPolicy 쓰는 방법

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>{el.title}</div>
      ))}
    </div>
  );
}
