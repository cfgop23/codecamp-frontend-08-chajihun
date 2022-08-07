import { useRouter } from "next/router";

const FETCH_BOARDS = [
  { _id: "111", writer: "철수", title: "안녕하세요" },
  { _id: "222", writer: "영희", title: "안녕하세요" },
  { _id: "333", writer: "훈이", title: "안녕하세요" },
  { _id: "444", writer: "맹구", title: "안녕하세요" },
];

export default function HofPage() {
  const router = useRouter();

  const onClickMove = (boardId: string) => () => {
    router.push(`/boards/${boardId}`);
  };

  return (
    <div>
      {FETCH_BOARDS.map((el) => (
        <div key={el._id} onClick={onClickMove(el._id)}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
