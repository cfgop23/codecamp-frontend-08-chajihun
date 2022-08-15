import * as s from "../../src/components/units/boards/list/BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { getDate } from "../../src/commons/libraries/utils";

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

export default function BoardListUI() {
  // const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEMS);
  console.log(data);

  const onClickMoveToItem = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${(event.target as HTMLDivElement).id}`);
  };

  //   const onChangeKeyword = (value: string) => {
  //     setKeyword(value);
  //   };

  return (
    <s.Wrapper>
      <s.Title>스토어</s.Title>
      {/* <s.SearchBar>
        <SearchDebounce
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
      </s.SearchBar> */}
      <s.Table>
        <s.RowHead>
          {/* <s.ColumnHeaderId>ID</s.ColumnHeaderId> */}
          <s.ColumnHeaderTitle>이름</s.ColumnHeaderTitle>
          <s.ColumnHeaderWriter>가격</s.ColumnHeaderWriter>
          <s.ColumnHeaderWriter>판매자</s.ColumnHeaderWriter>
          <s.ColumnHeaderDate>등록일</s.ColumnHeaderDate>
        </s.RowHead>
        {data?.fetchUseditems.map((el) => (
          <s.Row key={uuidv4()} id={el._id} onClick={onClickMoveToItem}>
            {/* <s.ColumnId>{String(el._id).slice(-4).toUpperCase()}</s.ColumnId> */}
            <s.ColumnTitle>
              {/* {el.title
                .replaceAll(keyword, `#$%${keyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{ color: props.keyword === el ? "red" : "black" }}
                  >
                    {el}
                  </span>
                ))} */}
              {el.name}
            </s.ColumnTitle>
            <s.Column>{el.price}</s.Column>
            <s.Column>{el.seller.name}</s.Column>
            <s.ColumnDate>{getDate(el.createdAt)}</s.ColumnDate>
          </s.Row>
        ))}
      </s.Table>
      {/* <s.Footer>
        <div></div>
        <Pagination refetch={props.refetch} count={props.count} />
        <s.Button onClick={props.onClickMoveToBoardWrite}>글쓰기</s.Button>
      </s.Footer> */}
    </s.Wrapper>
  );
}
