import { MouseEvent, useState } from "react";

export default function Pagination(props: any) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNext = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <>
      <span onClick={onClickPrev}>이전페이지</span>
      {new Array(10).fill(1).map((_, i) =>
        i + startPage <= props.lastPage ? (
          <span
            key={i + startPage}
            id={String(i + startPage)}
            onClick={onClickPage}
          >
            {" "}
            {i + startPage}{" "}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNext}>다음페이지</span>
    </>
  );
}
