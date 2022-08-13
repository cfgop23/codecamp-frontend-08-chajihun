import styled from "@emotion/styled";

interface ButtonStyledProps {
  isActive: boolean;
}

export const Button = styled.button`
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
