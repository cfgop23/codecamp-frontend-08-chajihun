import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketButton(props: any) {
  const [isCancel, setIsCancel] = useState(false);

  const onClickPut = (board: IBoard) => () => {
    const boards: Pick<IBoard, "_id" | "writer" | "title" | "contents">[] =
      JSON.parse(localStorage.getItem("boards") || "[]");

    const temp = boards.filter((el) => el._id === board._id);
    if (temp.length === 1) {
      return;
    }

    const { __typename, ...rest } = board;
    boards.push(rest);

    localStorage.setItem("boards", JSON.stringify(boards));

    setIsCancel(true);
  };

  const onClickCancel = (board: IBoard) => () => {
    const boards: Pick<IBoard, "_id" | "writer" | "title" | "contents">[] =
      JSON.parse(localStorage.getItem("boards") || "[]");

    const temp = boards.filter((el) => el._id !== board._id);

    localStorage.setItem("boards", JSON.stringify(temp));

    setIsCancel(false);
  };

  useEffect(() => {
    const boards = JSON.parse(localStorage.getItem("boards") || "[]");
    boards.forEach((el: any) => {
      if (el._id === props.id) {
        setIsCancel(true);
      }
    });
  }, []);

  return (
    <button onClick={isCancel ? onClickCancel(props.el) : onClickPut(props.el)}>
      {isCancel ? "담기 취소" : "게시물 담기"}
    </button>
  );
}
