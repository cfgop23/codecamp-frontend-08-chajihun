import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: skyblue;
  margin: 50px 0 50px 20px;
`;
export const CommentsCreate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentsId = styled.div`
  display: flex;
`;
export const CommentsInput = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid #cacaca;
  border-bottom: none;
  padding-left: 30px;
  font-size: 16px;
`;

export const CommentsContentsInput = styled.textarea`
  width: 1000px;
  height: 160px;
  border: 1px solid #cacaca;
  padding: 20px;
  font-size: 20px;
`;
export const CommentsCreateButton = styled.div`
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 920px;

  cursor: pointer;

  :hover {
    background-color: skyblue;
    color: white;
  }
`;

export const RatingStar = styled(Rate)`
  margin-left: 30px; ;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;
