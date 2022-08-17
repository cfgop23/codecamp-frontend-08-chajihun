import { memo } from "react";

function MemoizationChild() {
  console.log("자식 컴포넌트");

  return (
    <>
      <div>============================</div>
      <h1>자식 컴포넌트</h1>
      <div>============================</div>
    </>
  );
}

export default memo(MemoizationChild);
