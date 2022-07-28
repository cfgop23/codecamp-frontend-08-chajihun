import * as s from "./BoardCommentsWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentsWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <s.Wrapper>
      {!props.isEdit && <s.Title>댓글</s.Title>}
      <s.CommentsCreate>
        <s.CommentsId>
          <s.CommentsInput
            value={props.writer || props.el?.writer || ""}
            type="text"
            placeholder="이름"
            onChange={props.onChangeWriter}
            readOnly={!!props.el?.writer}
          ></s.CommentsInput>
          <s.CommentsInput
            value={props.password}
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></s.CommentsInput>
          <s.RatingStar
            onChange={props.onChangeRating}
            value={props.value || props.el?.rating || 0}
          />
        </s.CommentsId>
        <s.CommentsContentsInput
          maxLength={100}
          value={
            props.isEdit ? props.contents || props.el?.contents : props.contents
          }
          placeholder="내용을 작성하세요."
          onChange={props.onChangeContents}
        ></s.CommentsContentsInput>
        <s.CommentsFooter>
          <s.ContentsLength>
            {(props.contents
              ? props.contents.length
              : props.el?.contents.length) || 0}
            /100
          </s.ContentsLength>
          <s.CommentsCreateButton
            onClick={
              props.isEdit
                ? props.onClickCommentsUpdate
                : props.onClickCommentsWrite
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </s.CommentsCreateButton>
        </s.CommentsFooter>
      </s.CommentsCreate>
    </s.Wrapper>
  );
}
