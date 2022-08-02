import * as s from "./Header.styles";

export default function LayoutHeader() {
  return (
    <s.Wrapper>
      <s.Title>커피트리</s.Title>
      <s.Menu>
        <s.Store>스토어</s.Store>
        <s.review>리뷰</s.review>
        <s.Community>커뮤니티</s.Community>
        <s.Introduce>소개</s.Introduce>
        <s.Basket>장바구니</s.Basket>
        <s.MyPage>My Page</s.MyPage>
      </s.Menu>
    </s.Wrapper>
  );
}
