import { useCallback, useMemo, useState } from "react";
import MemoizationChild from "./child";

export default function MemoizationParent() {
  console.log("리렌더링 시작");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const memo = useMemo(() => {
    countLet += 1;
    return countLet;
  }, []);

  const onClickLet = () => {
    console.log(memo);
  };

  // const onClickState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  // }, []);

  // const onClickState = useMemo(
  //   () => () => {
  //     setCountState((prev) => prev + 1);
  //   },
  //   []
  // );
  console.log(countState);

  return (
    <>
      <button onClick={onClickLet}>let</button>
      <button
        onClick={useMemo(
          () => () => {
            setCountState((prev) => prev + 1);
          },
          []
        )}
      >
        state
      </button>
      <MemoizationChild />
    </>
  );
}
