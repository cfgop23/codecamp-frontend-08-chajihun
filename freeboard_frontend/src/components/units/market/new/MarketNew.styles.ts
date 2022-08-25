import styled from "@emotion/styled";
import { Modal } from "antd";

interface ButtonStyledProps {
  isActive: boolean;
}

export const AddressModal = styled(Modal)``;

export const Form = styled.form`
  margin: auto;
  margin-top: 100px;
  width: 1000px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const InputWrapper = styled.div`
  width: 600px;
`;

export const contentsEditor = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 55px;
`;

export const Label = styled.h2`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;

export const ButtonSubmit = styled.button`
  margin-top: 30px;
  width: 200px;
  height: 40px;
  border: none;
  cursor: pointer;

  color: ${(props: ButtonStyledProps) =>
    props.isActive ? "#f0f0f0 " : "#7a583a"};
  background-color: ${(props: ButtonStyledProps) =>
    props.isActive ? "#7a583a " : "#f0f0f0"};
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 20px;
`;

export const ImgButton = styled.div`
  width: 70px;
  height: 30px;
  border: none;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  :hover {
    background-color: #7a583a;
    color: white;
  }
`;

export const AddressContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

export const MapWrapper = styled.div`
  width: 500px;
  height: 250px;
  background-color: #999;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  height: 250px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AddBtnWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const InputZipcode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 15px;
  padding: 15px;
`;

export const AddressBtn = styled.div`
  width: 124px;
  height: 51px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const InputCreate = styled.input`
  width: 100%;
  height: 56px;
  font-weight: 400;
  font-size: 15px;
  ::placeholder {
    color: #a9a9a9;
  }
  border: none;
  padding: 20px;
  background-color: #e9e9e9;
`;
