// import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";

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
      <div style={{ display: "flex" }}>
        <LayoutSidebar />
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
