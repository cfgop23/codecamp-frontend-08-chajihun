import * as s from "./BoardDetail.styles";

import { FiLink2 } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import CommentsPage from "../../../../../pages/freeboard/[detailsId]/comments";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <s.Wrapper>
      <s.Header>
        <s.ProfileImg>
          <BsPersonCircle />
        </s.ProfileImg>
        <s.ProfileDetail>
          <s.ProfileName>{props.data?.fetchBoard?.writer}</s.ProfileName>
          <s.Dates>{props.data?.fetchBoard?.createdAt.substr(0, 10)}</s.Dates>
        </s.ProfileDetail>
        <s.HeadButton>
          <s.Link>
            <FiLink2 />
          </s.Link>
          <s.Location>
            <GoLocation />
          </s.Location>
        </s.HeadButton>
      </s.Header>
      <s.Horizon></s.Horizon>
      <s.Body>
        <s.Title>{props.data?.fetchBoard?.title}</s.Title>
        <s.ContentsWrapper>
          <s.Contents>{props.data?.fetchBoard?.contents}</s.Contents>
        </s.ContentsWrapper>
      </s.Body>
      <s.Footer>
        <s.Likes>
          <s.LikesIcon>
            <AiOutlineLike />
          </s.LikesIcon>
          <s.LikesCount>{props.data?.fetchBoard?.likeCount}</s.LikesCount>
        </s.Likes>
        <s.Dislikes>
          <s.DislikesIcon>
            <AiOutlineDislike />
          </s.DislikesIcon>
          <s.DislikesCount>
            {props.data?.fetchBoard?.dislikeCount}
          </s.DislikesCount>
        </s.Dislikes>
      </s.Footer>
      <s.FooterButton>
        <s.Button onClick={props.onClickMoveToBoards}>목록으로</s.Button>
        <s.Button onClick={props.onClickUpdate}>수정하기</s.Button>
        <s.Button
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </s.Button>
      </s.FooterButton>
      <CommentsPage />
    </s.Wrapper>
  );
}
