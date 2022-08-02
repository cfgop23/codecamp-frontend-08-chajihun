import { useRouter } from "next/router";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickToHome = () => {
    router.push("/");
  };

  return <LayoutHeaderUI onClickToHome={onClickToHome} />;
}
