import { LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Div = styled.div`
  margin-top: 20px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileImage = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 100px;
  background-color: #cacaca;
  line-height: 100px;
  display: flex;
  justify-content: center;
`;

export const CreateButton = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 20px;
`;
export const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export const LikeIcon = styled(LikeOutlined)`
  width: 30px;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  margin: 30px 0 20px 0;
`;
