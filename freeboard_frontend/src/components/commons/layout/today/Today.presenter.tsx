import { IUseditem } from "../../../../commons/types/generated/types";
import * as s from "./Today.styles";

interface ITodayUIProps {
  todays?: any[];
}

export default function TodayUI(props: ITodayUIProps) {
  return (
    <s.Wrapper>
      <s.Title>최근 본 상품</s.Title>
      {props.todays?.[0]?.images?.[0] ? (
        <s.Img
          src={`https://storage.googleapis.com/${props.todays[0].images?.[0]}`}
        />
      ) : (
        <s.Img src="/images/noimage2.jpeg" />
      )}
      {props.todays?.[1]?.images?.[0] ? (
        <s.Img
          src={`https://storage.googleapis.com/${props.todays[1].images?.[0]}`}
        />
      ) : (
        <s.Img src="/images/noimage2.jpeg" />
      )}
      {props.todays?.[2]?.images?.[0] ? (
        <s.Img
          src={`https://storage.googleapis.com/${props.todays![2].images?.[0]}`}
        />
      ) : (
        <s.Img src="/images/noimage2.jpeg" />
      )}
    </s.Wrapper>
  );
}
