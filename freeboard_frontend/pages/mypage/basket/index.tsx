import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IUseditem } from "../../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 486px;
  height: 300px;
  margin: 30px;
  object-fit: cover;
`;

export default function BasketListPage() {
  const [baskets, setBaskets] = useState<IUseditem[]>([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);

  return (
    <>
      {baskets.map((el) => (
        <Row key={uuidv4()}>
          <ImageWrapper>
            {el.images![0] ? (
              el.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))
            ) : (
              <Image src="/images/noimage2.jpeg" />
            )}
          </ImageWrapper>
          <Column>{el._id}</Column>
          <Column>{el.name}</Column>
          <Column>{el.price}</Column>
          <Column>{el.contents}</Column>
          <Column>{el.seller?.name}</Column>
        </Row>
      ))}
    </>
  );
}
