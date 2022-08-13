import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface InputLoginProps {
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: object;
}

const Input = styled.input`
  height: 40px;
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
`;

export default function InputLogin(props: InputLoginProps) {
  return (
    <Input type={props.type} onChange={props.onChange} {...props.register} />
  );
}
