import styled from "@emotion/styled";

export const Comments = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: #e9e9e9;
  margin-top: 30px;
  border: none;
  padding: 20px;
  font-size: 20px;
`;
export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
export const Submit = styled.button`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  width: 116px;
  height: 42px;
  background: #ffe004;
  border: none;
  cursor: pointer;
`;

export const Cancel = styled.button`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  width: 116px;
  height: 42px;
  background: #fff;
  border: 1px solid #999;
  cursor: pointer;
  margin-right: 10px;
`;
