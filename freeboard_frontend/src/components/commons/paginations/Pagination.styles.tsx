import styled from "@emotion/styled";
import { IActiveProps, IPageNumProps } from "./Pagination.types";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PageNum = styled.div`
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 300;
  margin: 5px;
  cursor: pointer;
  color: ${(props: IPageNumProps) => (props.isPaged ? "skyblue" : "DimGray")};
`;

export const Prev = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: white;
  color: ${(props: IActiveProps) => (props.isActive ? "skyblue" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Next = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: white;
  color: ${(props: IActiveProps) => (props.isActive ? "skyblue" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
