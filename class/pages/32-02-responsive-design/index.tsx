import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: rebeccapurple;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: royalblue;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: yellowgreen;
    display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
