export default function RoutedPageUI(props) {
  return (
    <>
      <div>{props.number}번 게시글 이동 완료</div>
      <div>
        작성자: {props.data ? props.data.fetchBoard.writer : "받아오는 중"}
      </div>
      {/* <div>제목: {data ? data.fetchBoard.title : "받아오는 중"}</div> */}
      <div>제목: {props.data?.fetchBoard.title}</div>
      {/* 옵셔녈 체이닝 */}
      <div>내용: {props.data && props.data.fetchBoard.contents}</div>
      {/* data가 있으면 뒤에 꺼 보여줘 */}
    </>
  );
}
