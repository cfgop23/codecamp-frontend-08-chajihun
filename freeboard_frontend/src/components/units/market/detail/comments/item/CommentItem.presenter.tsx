import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  getDate,
  getErrorMessage,
} from "../../../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../../commons/types/generated/types";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "../../MarketDetail.queries";
import { ICommentItemProps } from "../MarketDetail.Comments.types";
import CommentsWrite from "../write/CommentsWrite.container";
import * as s from "./CommentItem.styles";

export default function CommentItem(props: ICommentItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  const onClickCommentsDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.marketid },
          },
        ],
      });
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onClickCommentsUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <s.CommentsWrapper>
          <s.CommentsProfile>
            <s.CommentsProfileIcon />
            <s.CommentsNameWrapper>
              <s.CommentsName>{props.el.user.name}</s.CommentsName>
              <s.CommentsDate>{getDate(props.el.createdAt)}</s.CommentsDate>
            </s.CommentsNameWrapper>
            <s.CommentsButton>
              <s.CommentsUpdate
                src="/images/pencil.png"
                onClick={onClickCommentsUpdate}
              ></s.CommentsUpdate>
              <s.CommentsDelete onClick={onClickCommentsDelete}>
                X
              </s.CommentsDelete>
            </s.CommentsButton>
          </s.CommentsProfile>
          <s.CommentsContents>{props.el.contents}</s.CommentsContents>
        </s.CommentsWrapper>
      )}
      {isEdit && (
        <CommentsWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
