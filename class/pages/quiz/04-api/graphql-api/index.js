import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "지훈", title: "제목", contents: "내용") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlGetPage() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const result = await createBoard();
    console.log(result);
    console.log(
      result.data.createBoard.message,
      result.data.createBoard.number
    );
  };
  return (
    <>
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </>
  );
}
