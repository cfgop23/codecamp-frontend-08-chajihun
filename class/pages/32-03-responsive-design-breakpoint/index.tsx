import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: rebeccapurple;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: royalblue;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: yellowgreen;
    display: none;
  }
`;

const MWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    width: 30%; // 반응형에서 디자인에서 가로는 비율(%)로 줄임
    height: 18.75rem; // em과 rem
    background-color: skyblue;
    display: block;
  }
`;

export default function ResponsiveDesignPage() {
  return (
    <>
      <MWrapper>모바일 전용 컴포넌트</MWrapper>
      <Wrapper>상자</Wrapper>
    </>
  );
}
