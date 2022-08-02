import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 600px;
  background-color: pink;
`;

export const BannerImg = styled.img`
  margin: auto;
  height: 600px;
`;

export const ImgWrapper = styled.div`
  width: 500px;
`;

export const StyleSlider = styled(Slider)`
  height: 550px;
  .slick-prev:before,
  .slick-next:before {
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
