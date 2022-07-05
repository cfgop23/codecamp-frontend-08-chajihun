import {
  Wrapper,
  Title,
  Head,
  HeadContainer,
  Name,
  Star,
  NameInput,
  Password,
  PassInput,
} from "../../styles/day1";

export default function Freeboard() {
  // here is javascript.

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Head>
        <HeadContainer>
          <Name>
            <span>작성자</span>
            <Star>*</Star>
          </Name>
          <NameInput type="text" placeholder=" 이름을 적어주세요."></NameInput>
        </HeadContainer>
        <HeadContainer>
          <Password>비밀번호</Password>
          <PassInput
            type="text"
            placeholder=" 비밀번호를 적어주세요."
          ></PassInput>
        </HeadContainer>
      </Head>
    </Wrapper>
  );
}
