import * as S from "./BoardWrite.styles";
// import qqq, {RedInput} from "./BoardWrite.styles"

export default function BoardWriteUI(props) {
  return (
    <>
      작성자:{" "}
      <S.RedInput type="text" onChange={props.onChangeWriter}></S.RedInput>
      <br />
      제목: <input type="text" onChange={props.onChangeTitle}></input>
      <br />
      내용: <input type="text" onChange={props.onChangeContents}></input>
      <br />
      <S.RedButton qqq={props.mycolor} onClick={props.onClickGraphqlApi}>
        GRAPHQL-API 요청하기
      </S.RedButton>
    </>
  );
}
