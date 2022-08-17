import { useCallback, useMemo, useState } from "react";
import MemoizationChild from "./child";

export default function MemoizationParent() {
  console.log("부모가 렌더링 됩니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback으로 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 사용 시 주의사항 => state를 사용
  // const onClickCountState = useCallback(() => {
  //   // console.log(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

  // 4. useMemo로 나만의 useCallback 만들어보기
  const onClickCountState = useMemo(
    () => () => {
      setCountState((prev) => prev + 1);
    },
    []
  );

  return (
    <>
      <div>============================</div>
      <h1>부모 컴포넌트</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1</button>

      <div>============================</div>
      <MemoizationChild countState={countState} />
    </>
  );
}
