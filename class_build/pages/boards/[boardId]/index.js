import { useRouter } from "next/router";
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export default function BoardsDetailPage(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:title" content={props?.fetchBoard.title} />
        <meta property="og:description" content={props?.fetchBoard.contents} />
        <meta property="og:image" content={props?.fetchBoard.images?.[0]} />
      </Head>
      <div>
        <div>게시판 번호 {router.query.boardId} 상세 페이지 </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  // 여기서 fetchBoard 요청
  const graphQLClient = new GraphQLClient(
    "https://backend08.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_BOARD, {
    boardId: context.query.boardId,
  });
  return {
    props: {
      fetchBoard: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
