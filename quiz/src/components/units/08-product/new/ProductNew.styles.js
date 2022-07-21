import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 400px;
  height: 570px;
  border: 1px solid gray;
  background-color: #cacaca;
  padding: 40px;
`;

export const ProductTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Seller = styled.div`
  width: ${(props) => (props.isSeller ? "0" : "100%")};
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 5px;
`;

export const Button = styled.button`
  font-size: 20px;
  background-color: none;
  margin-top: 20px;
`;
