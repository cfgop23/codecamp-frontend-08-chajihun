import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";

export const CommentsWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;
export const CommentsProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentsProfileIcon = styled(BsPersonCircle)`
  font-size: 40px;
  margin-right: 10px;
`;
export const CommentsNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CommentsName = styled.div`
  font-size: 24px;
`;
export const CommentsDate = styled.div`
  font-size: 15px;
  line-height: 100%;
  color: #999;
`;
export const CommentsButton = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentsUpdate = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const CommentsDelete = styled.div`
  font-size: 20px;
  color: #999;
  cursor: pointer;
`;
export const CommentsContents = styled.div`
  margin-top: 20px;
  min-height: 30px;
  font-size: 24px;
  line-height: 100%;
`;
