import * as s from "./ProductNew.styles";

export default function ProductNewUI(props) {
  return (
    <s.Wrapper>
      <s.ProductTitle>
        상품 {props.isEdit ? "수정하기" : "등록하기"}
      </s.ProductTitle>
      <s.Seller isSeller={props.isEdit}>
        <s.Title>판매자</s.Title>
        <s.Input type="text" onChange={props.onChangeSeller}></s.Input>
      </s.Seller>
      <s.Container>
        <s.Title>상품명</s.Title>
        <s.Input type="text" onChange={props.onChangeName}></s.Input>
      </s.Container>
      <s.Container>
        <s.Title>상품 설명</s.Title>
        <s.Input type="text" onChange={props.onChangeDetail}></s.Input>
      </s.Container>
      <s.Container>
        <s.Title>상품 가격</s.Title>
        <s.Input
          type="text"
          placeholder="숫자만 입력"
          onChange={props.onChangePrice}
        ></s.Input>
      </s.Container>
      <s.Button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </s.Button>
    </s.Wrapper>
  );
}
