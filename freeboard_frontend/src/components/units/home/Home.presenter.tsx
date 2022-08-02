import * as s from "./Home.styles";

export default function HomeUI() {
  return (
    <s.Wrapper>
      <s.ContentsWrapper>
        <s.Img src="/images/coffee1.jpeg"></s.Img>
        <s.ContentsDiv>Coffee</s.ContentsDiv>
      </s.ContentsWrapper>
      <s.ContentsWrapper>
        <s.ContentsDiv>Non-Coffee</s.ContentsDiv>
        <s.Img src="/images/non-coffee1.jpeg"></s.Img>
      </s.ContentsWrapper>
    </s.Wrapper>
  );
}
