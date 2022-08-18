import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface InputCreateProps {
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: object;
}

const Input = styled.input`
  width: 600px;
  height: 40px;
  padding-left: 10px;
  border: none;
  border: 1px solid #d9d9d9;
`;

export default function InputCreate(props: InputCreateProps) {
  return (
    <Input type={props.type} onChange={props.onChange} {...props.register} />
  );
}
