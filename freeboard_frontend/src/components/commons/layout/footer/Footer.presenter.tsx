import * as s from "./Footer.styles";

export default function LayoutFooter() {
  return (
    <s.Wrapper>
      {/* <s.FooterContent></s.FooterContent> */}
      <s.Copyright>
        <s.GrayDiv>Designed by</s.GrayDiv>
        <s.BrownDiv>Malza</s.BrownDiv>
        <s.GrayDiv>|</s.GrayDiv>
        <s.BrownDiv>Copyright</s.BrownDiv>
      </s.Copyright>
    </s.Wrapper>
  );
}
