import styled from "@emotion/styled";
import { IRedButtonProps } from "./boardWrite.types";

export const RedInput = styled.input`
  border-color: red;
`;

export const RedButton = styled.button`
  border-color: red;
  background-color: ${(props: IRedButtonProps) =>
    props.qqq ? "yellow" : "default"};
  // return props.qqq; ;
`;

// export default function qqq() {}
