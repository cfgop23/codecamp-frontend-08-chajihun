import { useRouter } from "next/router";

export default function OnePage() {
  const router = useRouter();
  console.log(router);
  return <div>바디영역</div>;
}
