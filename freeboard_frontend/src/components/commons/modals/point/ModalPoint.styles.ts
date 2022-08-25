import styled from "@emotion/styled";

interface IIsActiveProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
export const ModalWrapper = styled.div`
  width: 460px;
  height: 310px;
  background-color: #fff;
  margin: 300px auto;
  padding: 40px;
  padding-top: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin: 0 auto;
`;
export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #000;
  font-size: 16px;
  padding: 10px;
  color: #828282;
  .option {
    background: #fff;
  }
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: ${(props: IIsActiveProps) =>
    props.isActive ? "#000" : "#bdbdbd"};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const Cancel = styled.button`
  width: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;
export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
