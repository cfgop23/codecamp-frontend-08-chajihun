import { useState } from "react";
import Child1 from "../../src/components/units/14-lifting-state-up/Child1";
import Child2 from "../../src/components/units/14-lifting-state-up/Child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  // 방법 2
  const onClickCountUp = () => {
    setCount((prev: any) => prev + 1);
  };
  return (
    <div>
      <Child1
        count={count}
        onClickCountUp={onClickCountUp}
        // setCount={setCount} 방법 1
      />
      <div>===================================</div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
