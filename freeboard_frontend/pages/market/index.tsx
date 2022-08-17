import { v4 as uuidv4 } from "uuid";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import { getDate } from "../../src/commons/libraries/utils";
import * as s from "../../src/components/units/market/list/MarketList.styles";
import SearchDebounce from "../../src/components/commons/searchbars/debounce/SearchDebounce.container";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      contents
      price
      seller {
        name
      }
      images
      createdAt
    }
  }
`;

export default function MarketList() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  const onClickMoveToItem = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${(event.currentTarget as HTMLDivElement).id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = "/images/noimage2.jpeg";
  };

  return (
    <s.Wrapper>
      <s.TitleWrapper>
        <s.Title>스토어</s.Title>
        <s.SearchBar>
          <SearchDebounce refetch={refetch} onChangeKeyword={onChangeKeyword} />
        </s.SearchBar>
      </s.TitleWrapper>
      <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
        <s.ItemsWrapper>
          {data?.fetchUseditems.map((el) => (
            <s.ItemWrapper
              id={el._id}
              key={uuidv4()}
              onClick={onClickMoveToItem}
            >
              <s.ItemImg
                src={`https://storage.googleapis.com/${el.images![0]}`}
                onError={onErrorImg}
              ></s.ItemImg>
              <s.ItemName>
                {el.name
                  .replaceAll(keyword, `#$%${keyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <span
                      key={uuidv4()}
                      style={{ color: keyword === el ? "red" : "black" }}
                    >
                      {el}
                    </span>
                  ))}
              </s.ItemName>
              <s.ItemPrice>{el.price}원</s.ItemPrice>
              <s.ItemLabel>판매자: {el.seller!.name}</s.ItemLabel>
              <s.ItemLabel>{getDate(el.createdAt)}</s.ItemLabel>
            </s.ItemWrapper>
          ))}
        </s.ItemsWrapper>
      </InfiniteScroll>
    </s.Wrapper>
  );
}
