export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("==========시작==========");

    // 비동기 작업(메크로큐에 들어감.)
    setTimeout(() => {
      console.log("저는 setTimeout! 매크로큐! 0초 뒤에 실행될거에요!");
    }, 0);

    // 비동기 작업(마이크로큐에 들어감.)
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => {
      console.log("저는 Promise! 마이크로큐! 0초 뒤에 실행될거에요! - 1");
    });

    // 비동기 작업(매크로큐에 들어감.)
    setInterval(() => {
      console.log("저는 setInterval! 매크로큐! 0초 마다 실행될거에요!");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      sum = sum + 1;
    }

    // 비동기 작업(마이크로큐에 들어감.)
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => {
      console.log("저는 Promise! 마이크로큐! 0초 뒤에 실행될거에요! - 2");
    });

    // 마이크로큐가 먼저 실행, 매크로큐가 다음 실행

    console.log("==========종료==========");
  };

  return <button onClick={onClickTimer}>실행</button>;
}
