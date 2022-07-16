import * as s from "./BoardComments.styles";
import { BsPersonCircle } from "react-icons/bs";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardCommentsUI(props) {
  return (
    <s.Wrapper>
      <s.Title>댓글</s.Title>
      <s.CommentsCreate>
        <s.CommentsNameInput
          type="text"
          placeholder="이름을 작성하세요."
          onChange={props.onChangeWriter}
        ></s.CommentsNameInput>
        <s.CommentsContentsInput
          type="text"
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
          </s.CommentsWrapper>
        ))}
      </s.Table>
    </s.Wrapper>
  );
}
