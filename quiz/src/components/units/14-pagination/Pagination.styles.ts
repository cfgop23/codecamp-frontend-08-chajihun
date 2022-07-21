import styled from "@emotion/styled";
import { IActiveProps, IPageNumProps } from "./Pagination";

export const Wrapper = styled.div`
  padding: 50px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 25%;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const PageNum = styled.div`
  height: 25px;
  line-height: 25px;
  font-size: 25px;
  margin: 5px;
  cursor: pointer;
  color: ${(props: IPageNumProps) => (props.isPaged ? "skyblue" : "none")};
`;

export const Prev = styled.button`
  height: 25px;
  background-color: ${(props: IActiveProps) =>
    props.isActive ? "skyblue" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Next = styled.button`
  height: 25px;
  background-color: ${(props: IActiveProps) =>
    props.isActive ? "skyblue" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
