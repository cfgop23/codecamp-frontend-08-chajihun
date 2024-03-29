import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3px;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
`;

export const Title = styled.div`
  display: flex;
`;

export const TitleIcon = styled.img`
  width: 30px;
  height: 40px;
  margin-right: 10px;
`;

export const TitleName = styled.div`
  color: #7a583a;
  font-size: 30px;
  font-family: "Mouse Memoirs", sans-serif;
  cursor: pointer;
`;

export const Menu = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;

export const User = styled(Link)`
  font-weight: 600;
  cursor: pointer;
`;

export const Login = styled.div`
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;

export const LoginItem = styled.div`
  font-size: 14px;
  line-height: 100%;
  font-weight: 500;
  margin-left: -20px;
  margin-top: 3px;

  cursor: pointer;
  :hover {
    color: #7a583a;
  }
`;
