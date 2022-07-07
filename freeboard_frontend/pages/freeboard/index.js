import {
  Wrapper,
  Title,
  Head,
  Container,
  NameContainer,
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
} from "../../styles/emotion";

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FreeboardPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
  };

  // function onClickSignup(event) {
  //   if (name === "") {
  //     setNameError("이름을 입력해주세요.");
  //   } else if (password === "") {
  //     setPasswordError("비밀번호를 입력해주세요.");
  //   } else if (title === "") {
  //     setTitleError("제목을 입력해주세요.");
  //   } else if (content === "") {
  //     setContentsError("내용을 입력해주세요.");
  //   } else {
  //     alert("회원가입을 축하드립니다.");
  //   }
  // }

  const onClickSignup = async () => {
    if (!name) {
      setNameError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (content === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (name && password && title !== "" && content !== "") {
      alert("게시물이 등록되었습니다.");
    }

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: name,
          password: password,
          title: title,
          contents: content,
        },
      },
    });
    console.log(result);
    console.log(result.data.createBoard._id);
    console.log(name);
    console.log(password);
    console.log(title);
    console.log(content);
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Head>
        <NameContainer>
          <Name>
            <Label>작성자</Label>
            <Star>*</Star>
          </Name>
          <NameInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeName}
          ></NameInput>
          <ErrorMessage>{nameError}</ErrorMessage>
        </NameContainer>
        <NameContainer>
          <Name>
            <Label>비밀번호</Label>
            <Star>*</Star>
          </Name>
          <PassInput
            type="text"
            placeholder="비밀번호를 적어주세요."
            onChange={onChangePassword}
          ></PassInput>
          <ErrorMessage>{passwordError}</ErrorMessage>
        </NameContainer>
      </Head>
      <Container>
        <Name>
          <Label>제목</Label>
          <Star>*</Star>
        </Name>
        <ContentsTitle
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        ></ContentsTitle>
        <ErrorMessage>{titleError}</ErrorMessage>
      </Container>
      <Container>
        <Name>
          <Label>내용</Label>
          <Star>*</Star>
        </Name>
        <Contents
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        ></Contents>
        <ErrorMessage>{contentsError}</ErrorMessage>
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