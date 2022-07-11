import * as qqq from "./BoardWrite.styles";
// import qqq, {RedInput} from "./BoardWrite.styles"

export default function BoardWriteUI(props) {
  return (
    <>
      작성자:{" "}
      <qqq.RedInput type="text" onChange={props.onChangeWriter}></qqq.RedInput>
      <br />
      제목: <input type="text" onChange={props.onChangeTitle}></input>
      <br />
      내용: <input type="text" onChange={props.onChangeContents}></input>
      <br />
      <button onClick={props.onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </>
  );
}
