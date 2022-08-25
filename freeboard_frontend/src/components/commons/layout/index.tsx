import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { ReactNode } from "react";
// import LayoutBanner from "./banner/Banner.presenter";
import LayoutFooter from "./footer/Footer.presenter";
import LayoutHeader from "./header/Header.container";
import Today from "./today/Today.container";

// import LayoutNavigation from "./navigation";
// import LayoutSidebar from "./sidebar";

interface ILayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  /* height: auto;
  min-height: 100%;
  padding-bottom: 200px; */
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_BANNERS = ["/market", `/market/${router.query.marketId}`];
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

  // const HIDDEN_FOOTERS = ["/login", "/login/signup"];
  // const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <Wrapper>
      {isHiddenBanner && <Today />}
      <LayoutHeader />
      {/* {!isHiddenBanner && <LayoutBanner />} */}
      {/* <LayoutNavigation /> */}
      {/* <div style={{ display: "flex", padding: "0 150px 0 150px" }}> */}
      {/* <LayoutSidebar /> */}
      <div>{props.children}</div>
      {/* </div> */}
      {/* {!isHiddenFooter && <LayoutFooter />} */}
      <LayoutFooter />
    </Wrapper>
  );
}
