import styled from "@emotion/styled";
import { IIsActiveProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 100px;
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const NameContainer = styled.div`
  height: 120px;
  margin-bottom: 20px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 16px 0;
`;

export const Star = styled.div`
  color: #ffd600;
  padding-left: 5px;
`;

export const NameInput = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #cacaca;
  padding-left: 10px;
`;

export const PassInput = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #cacaca;
  padding-left: 10px;
`;

export const ContentsTitle = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #cacaca;
  padding-left: 10px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #cacaca;
  padding: 15px;
`;

export const AddCodeWrapper = styled.div`
  display: flex;
`;

export const AddCode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #cacaca;
  padding-left: 15px;
`;

export const AddButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 15px;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #cacaca;
  margin: 10px 0;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 45px;
  border: 1px solid #cacaca;
  padding: 10px;
`;

export const ImgWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Upload = styled.button`
  width: 78px;
  height: 78px;
  border: none;
  background-color: #bdbdbd;
  margin-right: 25px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.input``;

export const RadioLabel = styled.label`
  margin: 0 15px 0 5px;
  font-weight: 500;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;

  border: 1px solid gray;
  font-weight: 500;
  font-size: 18px;
  margin-top: 80px;
  cursor: pointer;

  background-color: ${(props: IIsActiveProps) =>
    props.isActive ? "skyblue" : "white"};
  color: ${(props: IIsActiveProps) => (props.isActive ? "white" : "black")};
`;

export const ErrorMessage = styled.div`
  color: red;
  padding-top: 5px;
`;
