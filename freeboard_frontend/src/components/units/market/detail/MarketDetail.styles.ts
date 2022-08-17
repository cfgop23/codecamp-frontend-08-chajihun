import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #7a583a;
  padding: 50px;
  background-color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.div`
  font-size: 35px;
  color: gray;
`;
export const ProfileDetail = styled.div`
  width: 100%;
  margin-left: 20px;
`;
export const ProfileName = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
`;
export const Dates = styled.div`
  font-size: 16px;
  width: 100%;
  color: #828282;
`;

export const Location = styled.div`
  font-size: 30px;
`;
export const Horizon = styled.div`
  width: 100%;
  border: none;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 25px;
  padding-left: 300px;
  color: #7a583a;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Contents = styled.div`
  width: 100%;
  min-height: 200px;
  font-size: 20px;
  border: 1px solid #7a583a;
  padding: 20px;
  margin-top: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 486px;
  height: 300px;
  margin: 30px;
  object-fit: cover;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const FooterButton = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  background: white;
  border: 1px solid gray;
  font-weight: 500;
  font-size: 18px;
  margin: 0 20px;

  cursor: pointer;
  :hover {
    background-color: #7a583a;
    color: white;
  }
`;

export const ToList = styled.a`
  width: 179px;
  height: 52px;
  background: white;
  border: 1px solid gray;
  font-weight: 500;
  font-size: 18px;
  margin: 0 40px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  :hover {
    background-color: #7a583a;
    color: white;
  }
`;
