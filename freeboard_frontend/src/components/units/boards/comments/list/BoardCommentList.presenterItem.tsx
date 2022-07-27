import * as s from "./BoardCommentList.styles";
import { BsPersonCircle } from "react-icons/bs";
import { getDate } from "../../../../../commons/libraries/utils";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  return (
    <s.Table>
      <s.CommentsWrapper>
        <s.CommentsProfile>
          <BsPersonCircle />
        </s.CommentsProfile>
        <s.Comments>
          <s.CommentsNameWrapper>
            <s.CommentsName>{props.el.writer}</s.CommentsName>
            <s.RatingStar disabled value={props.el.rating} />
          </s.CommentsNameWrapper>
          <s.CommentsContents>{props.el.contents}</s.CommentsContents>
          <s.CommentsDate>{getDate(props.el.createdAt)}</s.CommentsDate>
        </s.Comments>
        <s.CommentsButton>
          {/* <s.CommentsUpdate
        src="/images/pencil.png"
        id={el._id}
        onClick={props.onClickCommentsUpdate}
      ></s.CommentsUpdate> */}
          <s.CommentsDelete
            id={props.el._id}
            onClick={props.onClickCommentsDelete}
          >
            X
          </s.CommentsDelete>
        </s.CommentsButton>
      </s.CommentsWrapper>
    </s.Table>
  );
}
