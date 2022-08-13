import { useRouter } from "next/router";
import { ReactNode } from "react";
// import LayoutBanner from "./banner/Banner.presenter";
import LayoutFooter from "./footer/Footer.presenter";
import LayoutHeader from "./header/Header.container";

// import LayoutNavigation from "./navigation";
// import LayoutSidebar from "./sidebar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  // const HIDDEN_BANNERS = ["/login", "/login/signup"];
  // const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

  const HIDDEN_FOOTERS = ["/login", "/login/signup"];
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {/* {!isHiddenBanner && <LayoutBanner />} */}
      {/* <LayoutNavigation /> */}
      {/* <div style={{ display: "flex", padding: "0 150px 0 150px" }}> */}
      {/* <LayoutSidebar /> */}
      <div>{props.children}</div>
      {/* </div> */}
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
