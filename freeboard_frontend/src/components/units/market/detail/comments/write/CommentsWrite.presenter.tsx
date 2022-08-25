import { ChangeEvent } from "react";
import { IUseditemQuestion } from "../../../../../../commons/types/generated/types";
import * as s from "./CommentsWrite.styles";

interface ICommentsWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentsWrite: () => void;
  onClickCommentsUpdate: () => void;
  onClickCancel: () => void;
  isEdit?: boolean;
  el?: IUseditemQuestion;
  contents: string;
}

export default function CommentsWriteUI(props: ICommentsWriteUIProps) {
  return (
    <>
      <s.Comments
        value={
          props.isEdit ? props.contents || props.el?.contents : props.contents
        }
        placeholder="내용을 작성하세요."
        onChange={props.onChangeContents}
      ></s.Comments>
      <s.SubmitWrapper>
        {props.isEdit && (
          <s.Cancel onClick={props.onClickCancel}>취소하기</s.Cancel>
        )}
        <s.Submit
          onClick={
            props.isEdit
              ? props.onClickCommentsUpdate
              : props.onClickCommentsWrite
          }
        >
          {props.isEdit ? "수정하기" : "작성하기"}
        </s.Submit>
      </s.SubmitWrapper>
    </>
  );
}
