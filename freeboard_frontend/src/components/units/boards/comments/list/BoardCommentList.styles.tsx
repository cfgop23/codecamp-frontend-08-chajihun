import styled from "@emotion/styled";
import { Rate } from "antd";

// export const Wrapper = styled.div`
//   width: 100%;
//   margin-top: 100px;
//   display: flex;
//   flex-direction: column;
// `;

export const Table = styled.div`
  margin-top: 50px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 30px;
`;
export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const CommentsProfile = styled.div`
  font-size: 30px;
  margin-left: 10px;
  color: #cacaca;
`;

export const CommentsNameWrapper = styled.div`
  width: 500px;
  display: flex;
`;

export const CommentsName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const RatingStar = styled(Rate)`
  margin-left: 30px; ;
`;

export const CommentsContents = styled.div`
  font-size: 18px;
  padding-top: 10px;
`;
export const CommentsDate = styled.div`
  font-size: 15px;
  color: #bdbdbd;
  padding-top: 20px;
`;

export const CommentsButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 360px;
`;

export const CommentsUpdate = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CommentsDelete = styled.button`
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: white;
  border: none;
  color: #cacaca;
  font-size: 20px;
  margin-left: 20px;

  cursor: pointer;

  :hover {
    color: skyblue;
  }
`;
