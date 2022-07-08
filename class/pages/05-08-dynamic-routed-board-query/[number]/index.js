import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  console.log(data);

  return (
    <>
      <div>{router.query.number}번 게시글 이동 완료</div>
      <div>작성자: {data ? data.fetchBoard.writer : "받아오는 중"}</div>
      {/* <div>제목: {data ? data.fetchBoard.title : "받아오는 중"}</div> */}
      <div>제목: {data?.fetchBoard.title}</div>
      {/* 옵셔녈 체이닝 */}
      <div>내용: {data && data.fetchBoard.contents}</div>
      {/* data가 있으면 뒤에 꺼 보여줘 */}
    </>
  );
}
