import styled from "@emotion/styled";

interface ButtonStyledProps {
  isActive: boolean;
}

export const Form = styled.form`
  margin: auto;
  margin-top: 100px;
  width: 500px;
  border: 1px solid #7a583a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 70px;
  background-color: #fff;
`;

export const Title = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  color: red;
  margin-bottom: 10px;
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
