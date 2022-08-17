import Dompurify from "dompurify";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsPersonCircle } from "react-icons/bs";
import { getDate } from "../../../src/commons/libraries/utils";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import * as s from "../../../src/components/units/market/detail/MarketDetail.styles";
import BasketButton from "../../../src/components/units/mypage/basket/BasketButton";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      contents
      price
      images
      seller {
        name
      }
      createdAt
    }
  }
`;

export default function MarketDetail() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  console.log(data);

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
              data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <s.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))
            ) : (
              <s.Image src="/images/noimage2.jpeg"></s.Image>
            )}
          </s.ImageWrapper>
          <s.ContentsWrapper>
            <s.Title>{data?.fetchUseditem?.name}</s.Title>
            <s.Price>{data?.fetchUseditem?.price}원</s.Price>
            <s.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(data?.fetchUseditem?.contents || ""),
              }}
            ></s.Contents>
            <s.ButtonWrapper>
              <BasketButton data={data?.fetchUseditem}>장바구니</BasketButton>
              <s.Button>구매하기</s.Button>
            </s.ButtonWrapper>
          </s.ContentsWrapper>
        </s.Body>
      </s.Wrapper>
      <s.FooterButton>
        <Link href="/market">
          <s.ToList>목록으로</s.ToList>
        </Link>
        {/* <s.Button onClick={onClickUpdate}>수정하기</s.Button>
    <s.Button id={data?.fetchBoard?._id} onClick={onClickDelete}>
      삭제하기
    </s.Button> */}
      </s.FooterButton>
    </>
  );
}
