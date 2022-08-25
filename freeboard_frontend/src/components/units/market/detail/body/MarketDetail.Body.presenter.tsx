import { IMarketDetailUIProps } from "../MarketDetail.types";
import * as s from "./MarketDetail.Body.styles";
import Dompurify from "dompurify";
import MapComponent from "../../../../commons/map";
// import MapComponent from "../../../../commons/map";

export default function MarketDetailBodyUI(props: IMarketDetailUIProps) {
  return (
    <s.Wrapper>
      <s.Title>상품정보</s.Title>
      <s.Horizon />
      <s.ContentsWrapper>
        <s.ImageWrapper>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string, i) => (
              <s.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </s.ImageWrapper>
        {typeof window !== "undefined" ? (
          <s.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                props.data?.fetchUseditem?.contents || ""
              ),
            }}
          ></s.Contents>
        ) : (
          <s.Contents></s.Contents>
        )}

        <s.MapTitleWrapper>
          <s.MapIcon />
          <s.MapTitle>거래지역</s.MapTitle>
        </s.MapTitleWrapper>
        <s.MapWrapper>
          <MapComponent
            address={props.data?.fetchUseditem.useditemAddress?.address || ""}
          />
        </s.MapWrapper>
      </s.ContentsWrapper>
    </s.Wrapper>
  );
}
