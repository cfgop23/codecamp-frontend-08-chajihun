import * as s from "./BoardDetail.styles";
import { FiLink2 } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import BoardCommentWrite from "../comments/write/BoardCommentsWrite.container";
import BoardCommentList from "../comments/list/BoardCommentList.container";

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
          <s.YoutubeWrapper>
            {props.data?.fetchBoard.youtubeUrl && (
              <s.Youtube
                url={props.data?.fetchBoard.youtubeUrl}
                width="486px"
                height="240px"
              />
            )}
          </s.YoutubeWrapper>
        </s.ContentsWrapper>
      </s.Body>
      <s.Footer>
        <s.Likes>
          <s.LikesIcon
            id={props.data?.fetchBoard?._id}
            onClick={props.onClickLike}
          >
            <AiOutlineLike />
          </s.LikesIcon>
          <s.LikesCount>{props.data?.fetchBoard?.likeCount}</s.LikesCount>
        </s.Likes>
        <s.Dislikes>
          <s.DislikesIcon
            id={props.data?.fetchBoard?._id}
            onClick={props.onClickDislike}
          >
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
      <BoardCommentWrite />
      <BoardCommentList />
    </s.Wrapper>
  );
}
