import * as s from "./Pagination.styles";

export default function PaginationUI(props) {
  return (
    <s.Wrapper>
      <s.PageWrapper>
        <s.Prev onClick={props.onClickPrev} isActive={props.startPage !== 1}>
          {"<"}
        </s.Prev>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <s.PageNum
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                isPaged={index + props.startPage === props.currentPage}
              >
                {index + props.startPage}
              </s.PageNum>
            )
        )}
        <s.Next
          onClick={props.onClickNext}
          isActive={props.startPage + 10 <= props.lastPage}
        >
          {">"}
        </s.Next>
      </s.PageWrapper>
    </s.Wrapper>
  );
}
