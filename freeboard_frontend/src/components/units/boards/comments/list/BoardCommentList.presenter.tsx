import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem
          key={el._id}
          el={el}
          onClickCommentsDelete={props.onClickCommentsDelete}
        />
      ))}
    </InfiniteScroll>
  );
}
