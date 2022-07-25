import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionCounterPage() {
  const [count, setCount] = useState(5);
  const router = useRouter();

  // componentDidMount() {
  //   console.log("그려지고 나서 실행");
  // }

  // componentDidUpdate() {
  //   console.log("변경되고 나서 실행");
  // }

  // componentWillUnmount() {
  //   console.log("사라질 때 실행");
  //   // 채팅방 나가기 api 요청
  // }

  // 위 세 함수를 하나로 처리할 수 있는 Hook
  // useEffect는 렌더링이 끝나고 나서 실행.
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);
  // ^ 의존성 배열
  // 의존성 배열의 값이 바뀌면 useEffect가 실행됨.
  // 값이 없기 때문에 한 번만 실행됨.

  useEffect(() => {
    console.log("변경되고 나서 실행");
  });
  // 배열이 없기 때문에 변경될 때마다 실행

  useEffect(() => {
    return () => {
      console.log("사라질 때 실행");
    };
  }, []);

  // 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라질 때 실행");
    };
  }, [count]);

  // 잘못된 사용(1. 추가 렌더링 발생, 2. 무한루프 발생)
  // useEffect(()=>{
  //   setCount(prev=>prev+1) // setState는 최대한 피하는게 좋음.
  // }, [count]) // 무한루프

  const counterUp = () => {
    setCount(1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
