import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationProps } from "./Pagination.types";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 1;

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    props.refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setCurrentPage(startPage - 10);
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setCurrentPage(startPage + 10);
  };

  return (
    <PaginationUI
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
}
