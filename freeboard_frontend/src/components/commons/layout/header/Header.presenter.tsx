import { uniqueId } from "lodash";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import * as s from "./Header.styles";
import { ILayoutHeaderUIProps } from "./Header.types";

const HEADER_MENUS = [
  { name: "스토어", page: "/market" },
  { name: "리뷰", page: "/freeboard" },
  { name: "소개", page: "/intro" },
  { name: "장바구니", page: "/mypage/basket" },
  { name: "마이페이지", page: "/mypage" },
];

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const [userInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);
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
          <s.MenuItem key={uniqueId()} href={el.page}>
            <a>{el.name}</a>
          </s.MenuItem>
        ))}
        {userInfo.name && (
          <s.User href="/mypage">
            <a>{`안녕하세요. ${userInfo.name}님`}</a>
          </s.User>
        )}
        <s.Login
          id={accessToken ? "/" : "/login"}
          onClick={accessToken ? props.onClickLogout : props.onClickLogin}
        >
          {accessToken ? "로그아웃" : "로그인"}
        </s.Login>
      </s.Menu>
    </s.Wrapper>
  );
}
