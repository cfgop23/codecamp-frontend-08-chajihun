import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 1100px;
  border: 1px solid #7a583a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
`;
export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 700;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 450px;
  margin-right: 10px;
`;
export const SearchBar = styled.div`
  margin-left: 250px;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const ItemWrapper = styled.div`
  width: 300px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ItemName = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 500;
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const ItemLabel = styled.div`
  margin-top: 10px;
`;
