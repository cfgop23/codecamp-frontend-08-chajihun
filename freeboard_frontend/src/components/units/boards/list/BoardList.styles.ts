import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 100px;
  padding: 80px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Table = styled.div`
  border-top: 2px solid #cacaca;
  margin-top: 20px;
`;

export const RowHead = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid #cacaca;
`;

export const Row = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #cacaca;
  :hover {
    color: skyblue;
    background-color: #eff8ff6e;
  }
`;

export const ColumnHeaderId = styled.div`
  width: 15%;
  margin-left: 20px;
`;

export const ColumnHeaderTitle = styled.div`
  width: 50%;
`;

export const ColumnHeaderWriter = styled.div`
  width: 15%;
  text-align: center;
`;

export const ColumnHeaderDate = styled.div`
  width: 20%;
  text-align: center;
`;

export const Column = styled.div`
  width: 15%;
  text-align: center;
`;

export const ColumnId = styled.div`
  width: 15%;
  margin-left: 10px;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  margin-left: 10px;
  cursor: pointer;
`;

export const ColumnDate = styled.div`
  width: 20%;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    background-color: skyblue;
    color: white;
  }
`;
