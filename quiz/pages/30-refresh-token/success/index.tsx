import { gql, useApolloClient } from "@apollo/client";
import { useState } from "react";
// import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const client = useApolloClient();
  const [result, setResult] = useState<any>();
  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
    setResult(result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭</button>
      {result ? (
        <div>{result?.data.fetchUserLoggedIn.name}님 환영합니다</div>
      ) : (
        <div></div>
      )}
    </>
  );
}
