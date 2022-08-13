import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickToHome = async () => {
    await router.push("/");
    location.reload();
  };

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) router.push(event.target.id);
  };

  const onClickLogin = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) router.push(event.target.id);
  };

  const onClickLogout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    await router.push("/");
    location.reload();
  };

  return (
    <LayoutHeaderUI
      onClickToHome={onClickToHome}
      onClickMenu={onClickMenu}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
    />
  );
}
