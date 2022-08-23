import { useRouter } from "next/router";

export default function BoardsDetailPage() {
  const router = useRouter();
  return <div>게시판 번호 {router.query.boardId} 상세 페이지 </div>;
}
