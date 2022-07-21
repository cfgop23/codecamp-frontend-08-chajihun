import {
  Wrapper,
  NotiWindow,
  Time,
  Search,
  Header,
  Profile,
  My,
  MyImg,
  Name,
  Arrow,
  MenuBar,
  BarTitle,
  BarTitleRed,
  Line,
  Body,
  BodyContent,
  QNum,
  Question,
  QContent,
  QArrow,
  Nav,
  NavContent,
  NavIcon,
  NavText,
  NavTextRed,
} from "../../../styles/faq";

import { FaSearch } from "react-icons/fa";

import {
  MdOutlineKeyboardArrowDown,
  MdSignalWifi3Bar,
  MdSignalCellular2Bar,
  MdBattery50,
} from "react-icons/md";

export default function FaQPage() {
  // here is javascript.

  return (
    <Wrapper>
      <NotiWindow>
        <MdSignalWifi3Bar size="20" />
        <MdSignalCellular2Bar size="20" />
        <MdBattery50 size="20" />
        <Time>12:30</Time>
      </NotiWindow>
      <Header>
        <Search>
          <FaSearch size="25" />
        </Search>
        <Profile>
          <My>마이</My>
          <MyImg src="/images/profile-image.png"></MyImg>
          <Name>임정아</Name>
          <Arrow> {">"}</Arrow>
        </Profile>
        <MenuBar>
          <BarTitle>공지사항</BarTitle>
          <BarTitle>이벤트</BarTitle>
          <BarTitleRed>FAQ</BarTitleRed>
          <BarTitle>Q&A</BarTitle>
        </MenuBar>
      </Header>
      <Line></Line>
      <Body>
        <BodyContent>
          <QNum>Q. 01</QNum>
          <Question>
            <QContent>리뷰 작성은 어떻게 하나요?</QContent>
            <QArrow>
              <MdOutlineKeyboardArrowDown size="30" color="#cacaca" />
            </QArrow>
          </Question>
        </BodyContent>
        <BodyContent>
          <QNum>Q. 02</QNum>
          <Question>
            <QContent>리뷰 수정/삭제는 어떻게 하나요?</QContent>
            <QArrow>
              <MdOutlineKeyboardArrowDown size="30" color="#cacaca" />
            </QArrow>
          </Question>
        </BodyContent>
        <BodyContent>
          <QNum>Q. 03</QNum>
          <Question>
            <QContent>아이디/비밀번호를 잊어버렸어요.</QContent>
            <QArrow>
              <MdOutlineKeyboardArrowDown size="30" color="#cacaca" />
            </QArrow>
          </Question>
        </BodyContent>
        <BodyContent>
          <QNum>Q. 04</QNum>
          <Question>
            <QContent>회원탈퇴를 하고 싶어요.</QContent>
            <QArrow>
              <MdOutlineKeyboardArrowDown size="30" color="#cacaca" />
            </QArrow>
          </Question>
        </BodyContent>
        <BodyContent>
          <QNum>Q. 05</QNum>
          <Question>
            <QContent>출발지 설정은 어떻게 하나요?</QContent>
            <QArrow>
              <MdOutlineKeyboardArrowDown size="30" color="#cacaca" />
            </QArrow>
          </Question>
        </BodyContent>
        <BodyContent>
          <QNum>Q. 06</QNum>
          <Question>
            <QContent>비밀번호를 변경하고 싶어요.</QContent>
            <QArrow>
              <MdOutlineKeyboardArrowDown size="30" color="#cacaca" />
            </QArrow>
          </Question>
        </BodyContent>
      </Body>
      <Line></Line>
      <Nav>
        <NavContent>
          <NavIcon src="/images/home.png"></NavIcon>
          <NavText>홈</NavText>
        </NavContent>
        <NavContent>
          <NavIcon src="/images/point.png"></NavIcon>
          <NavText>잇츠로드</NavText>
        </NavContent>
        <NavContent>
          <NavIcon src="/images/heart.png"></NavIcon>
          <NavText>마이찜</NavText>
        </NavContent>
        <NavContent>
          <NavIcon src="/images/my.png"></NavIcon>
          <NavTextRed>마이</NavTextRed>
        </NavContent>
      </Nav>
    </Wrapper>
  );
}
