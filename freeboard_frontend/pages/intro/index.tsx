import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map1Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=16d68c6a7dd55f93102ec051f30cf0a7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(34.84719, 128.59191), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        const markerPosition = new window.kakao.maps.LatLng(
          34.84719,
          128.59191
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
