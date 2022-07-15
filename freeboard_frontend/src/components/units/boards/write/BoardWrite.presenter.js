import * as s from "./BoardWrite.styles";
export default function BoardWriteUI(props) {
  return (
    <s.Wrapper>
      <s.Title>게시물{props.isEdit ? " 수정" : " 등록"}</s.Title>
      <s.Head>
        <s.NameContainer>
          <s.Name>
            <s.Label>작성자</s.Label>
            <s.Star>*</s.Star>
          </s.Name>
          <s.NameInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
          ></s.NameInput>
          <s.ErrorMessage>{props.nameError}</s.ErrorMessage>
        </s.NameContainer>
        <s.NameContainer>
          <s.Name>
            <s.Label>비밀번호</s.Label>
            <s.Star>*</s.Star>
          </s.Name>
          <s.PassInput
            type="password"
            placeholder="비밀번호를 적어주세요."
            onChange={props.onChangePassword}
          ></s.PassInput>
          <s.ErrorMessage>{props.passwordError}</s.ErrorMessage>
        </s.NameContainer>
      </s.Head>
      <s.Container>
        <s.Name>
          <s.Label>제목</s.Label>
          <s.Star>*</s.Star>
        </s.Name>
        <s.ContentsTitle
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
        ></s.ContentsTitle>
        <s.ErrorMessage>{props.titleError}</s.ErrorMessage>
      </s.Container>
      <s.Container>
        <s.Name>
          <s.Label>내용</s.Label>
          <s.Star>*</s.Star>
        </s.Name>
        <s.Contents
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContent}
        ></s.Contents>
        <s.ErrorMessage>{props.contentsError}</s.ErrorMessage>
      </s.Container>
      <s.Container>
        <s.Label>주소</s.Label>
        <s.AddCodeWrapper>
          <s.AddCode placeholder="07250"></s.AddCode>
          <s.AddButton>우편번호 검색</s.AddButton>
        </s.AddCodeWrapper>
      </s.Container>
      <s.Address></s.Address>
      <s.Address></s.Address>
      <s.ImgWrapper>
        <s.Label>사진첨부</s.Label>
        <s.UploadButton>+</s.UploadButton>
        <s.UploadButton>+</s.UploadButton>
        <s.UploadButton>+</s.UploadButton>
      </s.ImgWrapper>
      <s.OptionWrapper>
        <s.Label>메인설정</s.Label>
        <s.RadioWrapper>
          <s.RadioButton type="radio" id="youtube" name="radio" />
          <s.RadioLabel htmlFor="youtube">유튜브</s.RadioLabel>
          <s.RadioButton type="radio" id="image" name="radio" />
          <s.RadioLabel htmlFor="image">사진</s.RadioLabel>
        </s.RadioWrapper>
      </s.OptionWrapper>
      <s.ButtonWrapper>
        <s.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </s.SubmitButton>
      </s.ButtonWrapper>
    </s.Wrapper>
  );
}
