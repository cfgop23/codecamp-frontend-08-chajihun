import styled from "@emotion/styled";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 35px;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`;
export const Horizon = styled.div`
  width: 100%;
  border-top: 3px solid #555;
  margin: 20px 0;
`;
export const ContentsWrapper = styled.div`
  padding: 30px;
`;
export const Contents = styled.div`
  width: 100%;
  min-height: 100px;
  font-size: 20px;
  line-height: 100%;
  margin-bottom: 20px;
`;
export const MapTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const MapIcon = styled(HiOutlineLocationMarker)`
  font-size: 24px;
  color: #999;
  margin-right: 10px;
`;
export const MapTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin: 20px 0;
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 450px;
`;

export const Image = styled.img`
  width: 480px;
  height: 480px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
