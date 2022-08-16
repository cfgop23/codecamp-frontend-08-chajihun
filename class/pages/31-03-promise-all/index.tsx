export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("시작");
  };

  const onClickPromiseAll = async () => {
    console.time("시작");
    // results = ["철수", "영희", "훈이"]
    const results = await Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("철수");
        }, 3000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("영희");
        }, 1000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("훈이");
        }, 2000);
      }),
    ]);
    console.log(results);
    console.timeEnd("시작");
  };

  return (
    <>
      <button onClick={onClickPromise}>Promise</button>
      <button onClick={onClickPromiseAll}>Promise.all</button>
    </>
  );
}
