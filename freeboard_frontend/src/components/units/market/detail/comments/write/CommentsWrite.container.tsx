import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../../commons/types/generated/types";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "../../MarketDetail.queries";
import { ICommentWriteProps } from "../MarketDetail.Comments.types";
import CommentsWriteUI from "./CommentsWrite.presenter";

export default function CommentsWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCommentsWrite = async () => {
    if (!contents) {
      return;
    }

    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
    } catch (error) {
      getErrorMessage(error);
    }
    setContents("");
  };

  const onClickCommentsUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { boardId: router.query.marketid },
          },
        ],
      });

      props.setIsEdit?.(false);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onClickCancel = () => {
    props.setIsEdit(false);
  };

  return (
    <CommentsWriteUI
      onChangeContents={onChangeContents}
      onClickCommentsWrite={onClickCommentsWrite}
      onClickCommentsUpdate={onClickCommentsUpdate}
      onClickCancel={onClickCancel}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
