import { useState } from "react";

export default function StatePrevPage() {
  // ["철수", "영희", "훈이", "맹구"].map((index) => {
  // 	console.log(`영희는 ${index}번째 칸에 들어있습니다.`)
  // })
  ["철수", "영희", "훈이", "맹구"].map((el, index) => {
    return console.log(`${el}는 ${index}번째 칸에 들어있습니다.`);
  });

  const [state, setState] = useState(0);

  const onClickCount = () => {
    // setState((qwer) => prev + 1);
    setState((qwer) => qwer + 1);
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={onClickCount}>카운트 올리기</button>
    </div>
  );
}
