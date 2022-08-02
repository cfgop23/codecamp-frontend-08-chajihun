import * as s from "./Header.styles";
import { ILayoutHeaderUIProps } from "./Header.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <s.Wrapper>
      <s.Title onClick={props.onClickToHome}>
        <s.TitleIcon src="/images/tree.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap"
          rel="stylesheet"
        />
        <s.TitleName>CafeTree</s.TitleName>
      </s.Title>
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
