import { useState } from "react";

// export default function PrevstatePage() {
//   const [state, setState] = useState(0);

//   function sumAll() {
//     setState(state + 1);
//     setState(state + 2);
//     setState(state + 3);
//     setState(state + 4);
//   }

//   return (
//     <>
//       <div>결과는: {state}</div>
//       <button onClick={sumAll}>실행!</button>
//     </>
//   );
// } // 결과는 4

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function counterUp() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 3);
    setCount((prev) => prev + 4);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트 올리기!!!</button>
    </>
  );
}
