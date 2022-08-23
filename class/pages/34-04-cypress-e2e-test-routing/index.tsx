import { useRouter } from "next/router";

export default function CypressE2ETestRoutingPage() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/34-05-cypress-e2e-test-routed");
  };
  return <button onClick={onClickMove}>철수랑 놀러가기</button>;
}

// "cypress": "cypress open" : 브라우저 띄우면서 테스트
// "cypress": "cypress run" : 브라우저 안띄우고 테스트
