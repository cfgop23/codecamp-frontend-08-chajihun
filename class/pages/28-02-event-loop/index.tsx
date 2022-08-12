export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("==========시작==========");

    setTimeout(() => {
      console.log("0초 뒤에 실행");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      sum = sum + 1;
    }

    console.log("==========종료==========");
  };

  return <button onClick={onClickTimer}>setTimeout 실행</button>;
}
