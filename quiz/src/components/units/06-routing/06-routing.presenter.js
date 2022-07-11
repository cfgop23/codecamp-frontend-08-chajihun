// import * as styles from "./05-09.styles";

export default function RoutingPageUI(props) {
  return (
    <>
      작성자: <input type="text" onChange={props.onChangeWriter} />
      <br />
      제목: <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용: <input type="text" onChange={props.onChangeContents} />
      <br />
      <button
        disabled={props.abled}
        onChange={props.onChangeAble}
        onClick={props.onClickGraphqlApi}
      >
        게시글 이동하기
      </button>
    </>
  );
}
