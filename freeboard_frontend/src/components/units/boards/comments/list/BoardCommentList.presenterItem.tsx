import * as s from "./BoardCommentList.styles";
import { BsPersonCircle } from "react-icons/bs";
import {
  getDate,
  getErrorMessage,
} from "../../../../../commons/libraries/utils";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentsWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const onClickCommentsDelete = async () => {
    const myPassword = prompt("비밀번호를 입력해주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailsId },
          },
        ],
      });
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickCommentsUpdate = () => {
    setIsEdit(true);
  };

  return (
    <s.Table>
      {!isEdit && (
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
            <s.CommentsUpdate
              src="/images/pencil.png"
              onClick={onClickCommentsUpdate}
            ></s.CommentsUpdate>
            <s.CommentsDelete onClick={onClickCommentsDelete}>
              X
            </s.CommentsDelete>
          </s.CommentsButton>
        </s.CommentsWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </s.Table>
  );
}
