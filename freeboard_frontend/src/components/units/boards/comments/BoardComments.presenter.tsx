import * as s from "./BoardComments.styles";
import { BsPersonCircle } from "react-icons/bs";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentUIProps } from "./BoardComments.types";

export default function BoardCommentsUI(props: IBoardCommentUIProps) {
  return (
    <s.Wrapper>
      <s.Title>댓글</s.Title>
      <s.CommentsCreate>
        <s.CommentsId>
          <s.CommentsInput
            type="text"
            placeholder="이름"
            onChange={props.onChangeWriter}
          ></s.CommentsInput>
          <s.CommentsInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></s.CommentsInput>
        </s.CommentsId>
        <s.CommentsContentsInput
          placeholder="내용을 작성하세요."
          onChange={props.onChangeContents}
        ></s.CommentsContentsInput>
        <s.CommentsButton onClick={props.onClickComments}>
          등록하기
        </s.CommentsButton>
      </s.CommentsCreate>
      <s.Table>
        {props.data?.fetchBoardComments.map((el, i) => (
          <s.CommentsWrapper>
            <s.CommentsProfile>
              <BsPersonCircle />
            </s.CommentsProfile>
            <s.Comments key={el._id}>
              <s.CommentsName>{el.writer}</s.CommentsName>
              <s.CommentsContents>{el.contents}</s.CommentsContents>
              <s.CommentsDate>{getDate(el.createdAt)}</s.CommentsDate>
            </s.Comments>
            {/* <s.CommentsUpdate></s.CommentsUpdate> */}
            <s.CommentsDelete id={el._id} onClick={props.onClickCommentsDelete}>
              X
            </s.CommentsDelete>
          </s.CommentsWrapper>
        ))}
      </s.Table>
    </s.Wrapper>
  );
}
