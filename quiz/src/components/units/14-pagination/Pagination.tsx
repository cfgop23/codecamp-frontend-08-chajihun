import * as s from "./Pagination.styles";
import { MouseEvent, useState } from "react";
import { IPaginationProps } from "../../../../pages/14-pagination";

export interface IPageNumProps {
  isPaged: boolean;
}

export interface IActiveProps {
  isActive: boolean;
}

export default function PaginationPage(props: IPaginationProps) {
  const [isPage, setIsPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    props.refetch({ page: Number(event.target.id) });
    setIsPage(Number(event.target.id));
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setIsPage(startPage - 10);
  };
  const onClickNext = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: startPage + 10 });
      setIsPage(startPage + 10);
    }
  };
  return (
    <s.Wrapper>
      <s.PageWrapper>
        <s.Prev onClick={onClickPrev} isActive={startPage !== 1}>
          {"<"}
        </s.Prev>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= props.lastPage && (
              <s.PageNum
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                isPaged={index + startPage === isPage}
              >
                {index + startPage}
              </s.PageNum>
            )
        )}
        <s.Next
          onClick={onClickNext}
          isActive={startPage + 10 <= props.lastPage}
        >
          {">"}
        </s.Next>
      </s.PageWrapper>
    </s.Wrapper>
  );
}
