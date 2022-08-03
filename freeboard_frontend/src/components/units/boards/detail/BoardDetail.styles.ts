import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
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
  font-size: 24px;
  padding-bottom: 5px;
`;
export const Dates = styled.div`
  font-size: 16px;
  width: 100%;
  color: #828282;
`;
export const HeadButton = styled.div`
  display: flex;
  color: skyblue;
`;
export const Link = styled.div`
  padding-right: 20px;
  font-size: 30px;
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
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  padding-left: 20px;
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 50px;
  margin-top: 50px;
  border-top: 1px solid #cacaca;
`;
export const Contents = styled.div`
  font-size: 20px;
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

export const YoutubeWrapper = styled.div`
  margin-top: 200px;
`;
export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
export const Likes = styled.div`
  width: 30px;
  color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikesIcon = styled.div`
  font-size: 30px;
`;
export const LikesCount = styled.div`
  font-size: 20px;
  margin-top: 5px;
  padding-left: 7px;
`;
export const Dislikes = styled.div`
  width: 30px;
  color: #828282;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

export const DislikesIcon = styled.div`
  font-size: 30px;
`;

export const DislikesCount = styled.div`
  font-size: 20px;
  margin-top: 5px;
  padding-left: 7px;
`;

export const FooterButton = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  background: white;
  border: 1px solid gray;
  font-weight: 500;
  font-size: 18px;
  margin: 0 40px 0 40px;
  cursor: pointer;

  :hover {
    background-color: skyblue;
    color: white;
  }
`;
