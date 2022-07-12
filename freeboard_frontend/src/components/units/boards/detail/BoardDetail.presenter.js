import {
  Wrapper,
  Header,
  ProfileImg,
  ProfileDetail,
  ProfileName,
  Dates,
  HeadButton,
  Link,
  Location,
  Horizon,
  Body,
  Title,
  ContentsWrapper,
  Contents,
  Footer,
  Likes,
  LikesIcon,
  LikesCount,
  Dislikes,
  DislikesIcon,
  DislikesCount,
} from "../detail/BoardDetail.styles";

import { FiLink2 } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

export default function BoardDetailUI(props) {
  return (
    <Wrapper>
      <Header>
        <ProfileImg>
          <BsPersonCircle />
        </ProfileImg>
        <ProfileDetail>
          <ProfileName>{props.data?.fetchBoard?.writer}</ProfileName>
          <Dates>{props.data?.fetchBoard?.createdAt.substr(0, 10)}</Dates>
        </ProfileDetail>
        <HeadButton>
          <Link>
            <FiLink2 />
          </Link>
          <Location>
            <GoLocation />
          </Location>
        </HeadButton>
      </Header>
      <Horizon></Horizon>
      <Body>
        <Title>{props.data?.fetchBoard?.title}</Title>
        <ContentsWrapper>
          <Contents>{props.data?.fetchBoard?.contents}</Contents>
        </ContentsWrapper>
      </Body>
      <Footer>
        <Likes>
          <LikesIcon>
            <AiOutlineLike />
          </LikesIcon>
          <LikesCount>{props.data?.fetchBoard?.likeCount}</LikesCount>
        </Likes>
        <Dislikes>
          <DislikesIcon>
            <AiOutlineDislike />
          </DislikesIcon>
          <DislikesCount>{props.data?.fetchBoard?.dislikeCount}</DislikesCount>
        </Dislikes>
      </Footer>
    </Wrapper>
  );
}
