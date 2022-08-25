import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsPersonCircle } from "react-icons/bs";
import { getDate, getErrorMessage } from "../../../src/commons/libraries/utils";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import * as s from "../../../src/components/units/market/detail/MarketDetail.styles";
import BasketButton from "../../../src/components/units/mypage/basket/BasketButton";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todayState } from "../../../src/commons/store";
import MarketDetailBody from "../../../src/components/units/market/detail/body/MarketDetail.Body.container";
import MarketDetailComments from "../../../src/components/units/market/detail/comments/MarketDetail.Comments.container";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "../../../src/components/units/market/detail/MarketDetail.queries";

function MarketDetail() {
  const router = useRouter();
  const [, setTodays] = useRecoilState(todayState);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  // console.log(data);

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: { useditemId: String(router.query.marketId) },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.marketId },
        },
      ],
    });
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.marketId) },
        refetchQueries: [{ query: FETCH_USEDITEM }],
      });
      await router.push(`/market`);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onClickUpdate = () => {
    router.push(`/market/${router.query.marketId}/edit`);
  };

  const onClickBuy = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.marketId) },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      alert("구매가 완료되었습니다.");
      await router.push("/market");
      location.reload();
      console.log(result);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  useEffect(() => {
    if (!data?.fetchUseditem) return;
    // setTodays(data?.fetchUseditem);

    const todays = JSON.parse(localStorage.getItem("todays") || "[]");

    const temp = todays.filter((el: any) => el._id === data?.fetchUseditem._id); // temp는 임시용 변수
    if (temp.length === 1) {
      return;
    }
    if (todays.length >= 3) {
      todays.pop();
      todays.unshift(data?.fetchUseditem);
    } else {
      todays.push(data?.fetchUseditem);
    }

    // todays = new Set(todays);
    // todays = [...todays];
    setTodays(todays);
    localStorage.setItem("todays", JSON.stringify(todays));
  }, [data]);

  return (
    <>
      <s.Wrapper>
        <s.Header>
          <s.ProfileImg>
            <BsPersonCircle />
          </s.ProfileImg>
          <s.ProfileDetail>
            <s.ProfileName>{data?.fetchUseditem?.seller?.name}</s.ProfileName>
            <s.Dates>{getDate(data?.fetchUseditem?.createdAt)}</s.Dates>
          </s.ProfileDetail>
        </s.Header>
        <s.Horizon></s.Horizon>
        <s.Body>
          <s.ImageWrapper>
            {data?.fetchUseditem.images![0] ? (
              <s.Image
                src={`https://storage.googleapis.com/${data.fetchUseditem.images[0]}`}
              />
            ) : (
              <s.Image src="/images/noimage2.jpeg"></s.Image>
            )}
          </s.ImageWrapper>
          <s.ContentsWrapper>
            <s.Title>{data?.fetchUseditem?.name}</s.Title>
            <s.Price>{data?.fetchUseditem?.price?.toLocaleString()}원</s.Price>
            <s.Contents>{data?.fetchUseditem.remarks}</s.Contents>
            <s.ButtonWrapper>
              {data?.fetchUseditem?.pickedCount ? (
                <s.PickBtn
                  // style={{ backgroundColor: "#000" }}
                  onClick={onClickPick}
                >
                  <s.HeartIconPick />찜
                  <s.Count>{data?.fetchUseditem.pickedCount}</s.Count>
                </s.PickBtn>
              ) : (
                <s.PickBtn onClick={onClickPick}>
                  <s.HeartIconNon />찜
                  <s.Count>{data?.fetchUseditem.pickedCount}</s.Count>
                </s.PickBtn>
              )}
              <BasketButton data={data?.fetchUseditem}>장바구니</BasketButton>
              <s.Button onClick={onClickBuy}>구매하기</s.Button>
            </s.ButtonWrapper>
          </s.ContentsWrapper>
        </s.Body>
        <s.CommentsWrapper>
          <MarketDetailBody data={data} />
          <MarketDetailComments />
        </s.CommentsWrapper>
      </s.Wrapper>
      <s.FooterButton>
        <Link href="/market">
          <s.ToList>목록으로</s.ToList>
        </Link>
        <s.Button onClick={onClickUpdate}>수정하기</s.Button>
        <s.Button onClick={onClickDelete}>삭제하기</s.Button>
      </s.FooterButton>
    </>
  );
}

export default withAuth(MarketDetail);
