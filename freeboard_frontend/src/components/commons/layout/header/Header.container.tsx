import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickToHome = () => {
    router.push("/");
  };

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) router.push(event.target.id);
  };

  return (
    <LayoutHeaderUI onClickToHome={onClickToHome} onClickMenu={onClickMenu} />
  );
}
