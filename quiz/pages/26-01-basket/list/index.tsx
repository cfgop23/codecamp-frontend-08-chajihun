import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BasketListPage() {
  const [baskets, setBaskets] = useState<IBoard[]>([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("boards") || "[]");
    setBaskets(result);
  }, []);

  return (
    <>
      {baskets.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
    </>
  );
}
