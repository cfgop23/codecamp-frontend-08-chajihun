import {
  Wrapper,
  Title,
  Head,
  Container,
  Name,
  Label,
  Star,
  NameInput,
  PassInput,
  ContentsTitle,
  Contents,
  AddCodeWrapper,
  AddCode,
  AddButton,
  Address,
  Youtube,
  ImgWrapper,
  UploadButton,
  OptionWrapper,
  RadioWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  ErrorMessage,
} from "../../styles/freeboard";

import { useState } from "react";

export default function Freeboard() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nameError1, setNameError1] = useState("");
  const [nameError2, setNameError2] = useState("");
  const [nameError3, setNameError3] = useState("");
  const [nameError4, setNameError4] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContent(event) {
    setContent(event.target.value);
  }

  function onClickSignup(event) {
    console.log(name);
    console.log(password);
    console.log(title);
    console.log(content);

    if (name === "") {
      setNameError1("필수 입력입니다.");
    } else if (password === "") {
      setNameError2("필수 입력입니다.");
    } else if (title === "") {
      setNameError3("필수 입력입니다.");
    } else if (content === "") {
      setNameError4("필수 입력입니다.");
    } else {
      alert("회원가입을 축하드립니다.");
    }
  }

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Head>
        <Container>
          <Name>
            <Label>작성자</Label>
            <Star>*</Star>
          </Name>
          <NameInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeName}
          ></NameInput>
          <ErrorMessage>{nameError1}</ErrorMessage>
        </Container>
        <Container>
          <Label>비밀번호</Label>
          <PassInput
            type="text"
            placeholder="비밀번호를 적어주세요."
            onChange={onChangePassword}
          ></PassInput>
          <ErrorMessage>{nameError2}</ErrorMessage>
        </Container>
      </Head>
      <Container>
        <Label>제목</Label>
        <ContentsTitle
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        ></ContentsTitle>
        <ErrorMessage>{nameError3}</ErrorMessage>
      </Container>
      <Container>
        <Label>내용</Label>
        <Contents
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        ></Contents>
        <ErrorMessage>{nameError4}</ErrorMessage>
      </Container>
      <Container>
        <Label>주소</Label>
        <AddCodeWrapper>
          <AddCode placeholder="07250"></AddCode>
          <AddButton>우편번호 검색</AddButton>
        </AddCodeWrapper>
      </Container>
      <Address></Address>
      <Address></Address>
      <Container>
        <Label>유튜브</Label>
        <Youtube type="text" placeholder="링크를 복사해주세요."></Youtube>
      </Container>
      <ImgWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImgWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioWrapper>
          <RadioButton type="radio" id="youtube" name="radio" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </RadioWrapper>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSignup}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
