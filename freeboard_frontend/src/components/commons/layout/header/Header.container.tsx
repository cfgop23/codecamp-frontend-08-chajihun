import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/store";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const [, setIsOpen] = useRecoilState(isOpenState);

  const onClickToHome = async () => {
    await router.push("/");
    location.reload();
  };

  // const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
  //   if (event.target instanceof HTMLDivElement) router.push(event.target.id);
  // };

  const onClickLogin = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) router.push(event.target.id);
  };

  const onClickLogout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    await router.push("/");
    location.reload();
  };

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <LayoutHeaderUI
      onClickToHome={onClickToHome}
      // onClickMenu={onClickMenu}
      onClickIsOpen={onClickIsOpen}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
    />
  );
}
