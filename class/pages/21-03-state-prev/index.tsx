import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // 1. 화살표함수
    // setCount((prev) => prev + 1);

    //     // 1. 함수선언식
    //     setCount(function (prev) {
    //       // 로직 추가 가능
    //       // if(), for() 등

    //       return prev + 1;
    //     });

    // 3. 매개변수 바꿔보기
    setCount((adafdfadfd) => adafdfadfd + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCount}>카운트 올리기</button>
    </div>
  );
}
