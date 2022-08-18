import axios from "axios";

// 내가 만약 디스코드/카카오톡 개발자일 때(미리보기 사용자)
export default function OpengraphPreview() {
  const onClickOpengraph = async () => {
    // const result = await axios.get("https://www.gmarket.co.kr"); // CORS: https://www.naver.com 네이버는 CORS를 막아놈.
    const result = await axios.get(
      " http://localhost:3000/33-02-opengraph-head"
    );

    console.log(result.data);
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <div>
      <h1>사이트 미리보기 구현 연습</h1>
      <button onClick={onClickOpengraph}>미리보기 실행</button>
    </div>
  );
}
