export default function CounterLetDocumentPage() {
  function counterUp() {
    let count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;
  }

  function counterDown() {
    let count = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={counterUp}>카운트 올리기!!!</button>
      <button onClick={counterDown}>카운트 내리기!!!</button>
    </>
    //Fragment : 감싸는 빈 태그
    //<Fragment></Fragment> 도 가능 (차이 있음)
  );
}
