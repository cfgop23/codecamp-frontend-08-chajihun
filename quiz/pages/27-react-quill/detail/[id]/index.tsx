import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 40px;
`;

const Div = styled.div`
  font-size: 20px;
  margin: 20px;
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ReactQuillDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <Wrapper>
      <Div>작성자: {data?.fetchBoard.writer}</Div>
      <Div>제목: {data?.fetchBoard.title}</Div>
      {typeof window !== "undefined" ? (
        <Div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></Div>
      ) : (
        <Div></Div>
      )}
    </Wrapper>
  );
}
