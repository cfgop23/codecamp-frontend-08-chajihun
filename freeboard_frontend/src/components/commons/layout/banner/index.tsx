import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 300px;
  background-color: pink;
`;

const BannerImg = styled.img`
  margin: auto;
  height: 300px;
`;

const ImgWrapper = styled.div`
  width: 500px;
`;

const StyleSlider = styled(Slider)`
  height: 270px;
  .slick-prev:before,
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 30px;
  }
  .slick-prev {
    left: 500px;
    z-index: 9;
  }
  .slick-next {
    right: 500px;
    z-index: 9;
  }
`;

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
    <Wrapper>
      <StyleSlider {...settings}>
        <ImgWrapper>
          <BannerImg src="/images/banner1.jpeg" />
        </ImgWrapper>
        <ImgWrapper>
          <BannerImg src="/images/banner2.jpeg" />
        </ImgWrapper>
        <ImgWrapper>
          <BannerImg src="/images/banner3.jpeg" />
        </ImgWrapper>
      </StyleSlider>
    </Wrapper>
  );
}
