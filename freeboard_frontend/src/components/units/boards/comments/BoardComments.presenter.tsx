import * as s from "./BoardComments.styles";
import { BsPersonCircle } from "react-icons/bs";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentUIProps } from "./BoardComments.types";
import React from "react";

export default function BoardCommentsUI(props: IBoardCommentUIProps) {
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
          value={props.contents}
          placeholder="내용을 작성하세요."
          onChange={props.onChangeContents}
        ></s.CommentsContentsInput>
        <s.CommentsCreateButton onClick={props.onClickComments}>
          등록하기
        </s.CommentsCreateButton>
      </s.CommentsCreate>
      <s.Table>
        {props.data?.fetchBoardComments.map((el) => (
          <s.CommentsWrapper key={el._id}>
            <s.CommentsProfile>
              <BsPersonCircle />
            </s.CommentsProfile>
            <s.Comments key={el._id}>
              <s.CommentsNameWrapper>
                <s.CommentsName>{el.writer}</s.CommentsName>
                <s.RatingStar disabled={true} value={el.rating} />
              </s.CommentsNameWrapper>
              <s.CommentsContents>{el.contents}</s.CommentsContents>
              <s.CommentsDate>{getDate(el.createdAt)}</s.CommentsDate>
            </s.Comments>
            <s.CommentsButton>
              {/* <s.CommentsUpdate
                src="/images/pencil.png"
                id={el._id}
                onClick={props.onClickCommentsUpdate}
              ></s.CommentsUpdate> */}
              <s.CommentsDelete
                id={el._id}
                onClick={props.onClickCommentsDelete}
              >
                X
              </s.CommentsDelete>
            </s.CommentsButton>
          </s.CommentsWrapper>
        ))}
      </s.Table>
    </s.Wrapper>
  );
}
