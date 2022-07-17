import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: skyblue;
  margin: 50px 0 50px 20px;
`;
export const CommentsCreate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentsId = styled.div`
  display: flex;
`;
export const CommentsInput = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid #cacaca;
  border-bottom: none;
  padding-left: 30px;
  font-size: 16px;
`;

export const CommentsContentsInput = styled.textarea`
  width: 1000px;
  height: 160px;
  border: 1px solid #cacaca;
  padding: 20px;
  font-size: 20px;
`;
export const CommentsButton = styled.div`
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 920px;

  cursor: pointer;

  :hover {
    background-color: skyblue;
    color: white;
  }
`;
export const Table = styled.div`
  margin-top: 50px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 30px;
`;
export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const CommentsProfile = styled.div`
  font-size: 30px;
  margin-left: 10px;
  color: #cacaca;
`;
export const CommentsName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const CommentsContents = styled.div`
  font-size: 18px;
  padding-top: 10px;
`;
export const CommentsDate = styled.div`
  font-size: 15px;
  color: #bdbdbd;
  padding-top: 20px;
`;

export const CommentsDelete = styled.button`
  width: 20px;
  height: 20px;
  background-color: white;
  border: none;
  color: #cacaca;
  font-size: 20px;
  padding-left: 790px;

  cursor: pointer;

  :hover {
    color: skyblue;
  }
`;
