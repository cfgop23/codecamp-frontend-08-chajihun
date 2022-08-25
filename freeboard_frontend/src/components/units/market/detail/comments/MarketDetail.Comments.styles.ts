import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";

export const Wrapper = styled.div`
  width: 50%;
  padding: 0 30px;
  border-left: 1px solid #555555;
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

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
`;
export const ProfileImg = styled(BsPersonCircle)`
  font-size: 40px;
  margin-right: 30px;
`;
export const ProfileName = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
`;
export const ThinHor = styled.div`
  border-top: 1px solid #555555;
  margin-bottom: 75px;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
