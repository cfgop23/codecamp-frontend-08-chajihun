import styled from "@emotion/styled";

interface ButtonStyledProps {
  isActive: boolean;
}

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
