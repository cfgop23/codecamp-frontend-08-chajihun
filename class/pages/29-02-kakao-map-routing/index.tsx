// import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  // const router = useRouter();

  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  //   // router는 검색엔진에 노출이 잘 안됨.
  //   // 등록하기 같은 로직이 많은 버튼은 router를 쓴다.
  // };

  return (
    <>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      {/* <button>
        <a href="/29-03-kakao-map-routed">맵으로 이동하기</a>
        // a 태그는 검색엔진에는 좋지만 느림
      </button> */}
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>
      {/* 단순 이동은 Link를 쓴다. */}
    </>
  );
}
