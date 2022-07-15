import { ChangeEvent } from "react";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./boardWrite.types";

// import qqq, {RedInput} from "./BoardWrite.styles"

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      작성자:{" "}
      <S.RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard?.writer || ""}
      ></S.RedInput>
      {/* defaultValue="aaa" : 초기값만 고정 value="": 완전 고정 */}
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard?.title || ""}
      ></input>
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard?.contents || ""}
      ></input>
      <br />
      <S.RedButton
        qqq={props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.RedButton>
    </>
  );
}
