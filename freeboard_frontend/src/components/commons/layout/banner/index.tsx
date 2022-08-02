import * as s from "./Banner.styles";
import { v4 as uuidv4 } from "uuid";

const BANNER_IMG = [
  { name: "원두", src: "/images/coffee-banner1.jpeg" },
  { name: "카페", src: "/images/coffee-banner2.jpeg" },
  { name: "커피와 편지", src: "/images/coffee-banner3.jpeg" },
  { name: "커피로스팅", src: "/images/coffee-banner4.jpeg" },
];

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    appendDots: (dots: any) => (
      <div
        style={{
          padding: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <s.Wrapper>
      <s.StyleSlider {...settings}>
        {BANNER_IMG.map((el) => (
          <s.ImgWrapper key={uuidv4()}>
            <s.BannerImg src={el.src} />
          </s.ImgWrapper>
        ))}
      </s.StyleSlider>
    </s.Wrapper>
  );
}
