import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LifeCyclePage() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  //   useEffect(() => {
  //     alert("Rendered!");
  //   }, []);

  useEffect(() => {
    alert("Changed!");
  }, [isChange]);

  //   useEffect(() => {
  //     return () => {
  //       alert("Bye!");
  //     };
  //   }, []);

  useEffect(() => {
    alert("Rendered!");

    return () => {
      alert("Bye!");
    };
  }, []);

  const onClickIsChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <button onClick={onClickIsChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
