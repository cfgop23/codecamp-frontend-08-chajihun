import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: 500px;
  border: 1px solid #7a583a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-bottom: 30px;
  background-color: #fff;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  font-size: 20px;
  margin: 0 0 10px 10px;
`;

export const ErrorMessage = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  color: red;
  line-height: 40px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Bar = styled.div`
  color: #cacaca;
  margin: 0 10px;
`;

export const FooterButton = styled.div`
  color: #999;
  cursor: pointer;
`;
