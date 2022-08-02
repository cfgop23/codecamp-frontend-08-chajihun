import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 650px;
  background-color: black;
`;

export const BannerImg = styled.img`
  margin: auto;
  width: 100%;
  height: 650px;
  object-fit: cover;
`;

export const ImgWrapper = styled.div``;

export const StyleSlider = styled(Slider)`
  .slick-list {
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 1;
    font-size: 50px;
    opacity: 0.3;
    color: white;
  }

  .slick-prev {
    left: 20px;
    z-index: 9;
  }
  .slick-next {
    right: 50px;
    z-index: 9;
  }

  .slick-dots li button:before {
    font-size: 60px;
    content: "-";
    color: white;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }
`;
