// import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer/Footer.presenter";
import LayoutHeader from "./header/Header.presenter";
import LayoutNavigation from "./navigation";
// import LayoutSidebar from "./sidebar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  //   const router = useRouter();

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      {/* <div style={{ display: "flex", padding: "0 150px 0 150px" }}> */}
      {/* <LayoutSidebar /> */}
      <div>{props.children}</div>
      {/* </div> */}
      <LayoutFooter />
    </>
  );
}
