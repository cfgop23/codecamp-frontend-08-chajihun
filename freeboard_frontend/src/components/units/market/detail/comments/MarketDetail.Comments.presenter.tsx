import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USEDITEM } from "../MarketDetail.queries";
import CommentItem from "./item/CommentItem.presenter";
import * as s from "./MarketDetail.Comments.styles";
import { IMarketDetailCommentsUIProps } from "./MarketDetail.Comments.types";
import CommentsWrite from "./write/CommentsWrite.container";

export default function MarketDetailCommentsUI(
  props: IMarketDetailCommentsUIProps
) {
  const router = useRouter();
  const [, setIsEdit] = useState(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  return (
    <s.Wrapper>
      <s.Title>상점정보</s.Title>
      <s.Horizon />
      <s.ProfileWrapper>
        <s.ProfileImg />
        <s.ProfileName>{data?.fetchUseditem.seller?.name}</s.ProfileName>
      </s.ProfileWrapper>
      <s.ThinHor />
      <s.Title>댓글</s.Title>
      <s.Horizon />
      <CommentsWrite setIsEdit={setIsEdit} />
      <s.CommentsWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onFetchMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemQuestions.map((el) => (
            <CommentItem key={el._id} el={el} />
          )) || <div></div>}
        </InfiniteScroll>
      </s.CommentsWrapper>
    </s.Wrapper>
  );
}
