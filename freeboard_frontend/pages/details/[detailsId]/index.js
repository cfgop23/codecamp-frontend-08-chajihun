import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

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
} from "../../../styles/details/emotion";

import { FiLink2 } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

export default function DetailsPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detailsId,
    },
  });

  console.log(data);
  console.log(router);

  return (
    <Wrapper>
      <Header>
        <ProfileImg>
          <BsPersonCircle />
        </ProfileImg>
        <ProfileDetail>
          <ProfileName>{data?.fetchBoard.writer}</ProfileName>
          <Dates>{data && data.fetchBoard.createdAt.substr(0, 10)}</Dates>
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
        <Title>{data?.fetchBoard.title}</Title>
        <ContentsWrapper>
          <Contents>{data?.fetchBoard.contents}</Contents>
        </ContentsWrapper>
      </Body>
      <Footer>
        <Likes>
          <LikesIcon>
            <AiOutlineLike />
          </LikesIcon>
          <LikesCount>{data?.fetchBoard.likeCount}</LikesCount>
        </Likes>
        <Dislikes>
          <DislikesIcon>
            <AiOutlineDislike />
          </DislikesIcon>
          <DislikesCount>{data?.fetchBoard.dislikeCount}</DislikesCount>
        </Dislikes>
      </Footer>
    </Wrapper>
  );
}
