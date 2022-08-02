import * as s from "./Banner.styles";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <s.Wrapper>
      <s.StyleSlider {...settings}>
        <s.ImgWrapper>
          <s.BannerImg src="/images/banner1.jpeg" />
        </s.ImgWrapper>
        <s.ImgWrapper>
          <s.BannerImg src="/images/banner2.jpeg" />
        </s.ImgWrapper>
        <s.ImgWrapper>
          <s.BannerImg src="/images/banner3.jpeg" />
        </s.ImgWrapper>
      </s.StyleSlider>
    </s.Wrapper>
  );
}
