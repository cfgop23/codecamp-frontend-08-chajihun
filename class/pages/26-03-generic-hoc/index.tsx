import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  (Component: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 후 이용 가능합니다.");
        router.push("/23-06-login-check-hoc");
      }
    }, []);
    return <Component {...props} />;
  };
