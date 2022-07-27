import * as s from "./BoardCommentsWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentsWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <s.Wrapper>
      <s.Title>댓글</s.Title>
      <s.CommentsCreate>
        <s.CommentsId>
          <s.CommentsInput
            value={props.writer}
            type="text"
            placeholder="이름"
            onChange={props.onChangeWriter}
          ></s.CommentsInput>
          <s.CommentsInput
            value={props.password}
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></s.CommentsInput>
          <s.RatingStar onChange={props.onChangeRating} value={props.value} />
        </s.CommentsId>
        <s.CommentsContentsInput
          maxLength={100}
          value={props.contents}
          placeholder="내용을 작성하세요."
          onChange={props.onChangeContents}
        ></s.CommentsContentsInput>
        <s.ContentsLength>
          {(props.contents
            ? props.contents.length
            : props.el?.contents.length) || 0}
          /100
        </s.ContentsLength>
        <s.CommentsCreateButton onClick={props.onClickComments}>
          등록하기
        </s.CommentsCreateButton>
      </s.CommentsCreate>
    </s.Wrapper>
  );
}
