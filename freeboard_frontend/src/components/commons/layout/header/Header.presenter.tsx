import { uniqueId } from "lodash";
import * as s from "./Header.styles";
import { ILayoutHeaderUIProps } from "./Header.types";

const HEADER_MENUS = [
  { name: "스토어", page: "/store" },
  { name: "리뷰", page: "/freeboard" },
  { name: "소개", page: "/introduce" },
  { name: "장바구니", page: "/basket" },
  { name: "로그인", page: "/login" },
];

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <s.Wrapper>
      <s.Title onClick={props.onClickToHome}>
        <s.TitleIcon src="/images/tree.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap"
          rel="stylesheet"
        />
        <s.TitleName>Café Tree</s.TitleName>
      </s.Title>
      <s.Menu>
        {HEADER_MENUS.map((el) => (
          <s.MenuItem key={uniqueId()} id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </s.MenuItem>
        ))}
      </s.Menu>
    </s.Wrapper>
  );
}
