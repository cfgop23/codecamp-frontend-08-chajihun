import * as s from "./ProductDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <s.Wrapper>
      <s.ProductTitle>상품 설명</s.ProductTitle>
      <s.Container>
        <s.Title>판매자:</s.Title>
        <s.Contents>{props.data?.fetchProduct.seller}</s.Contents>
      </s.Container>
      <s.Container>
        <s.Title>상품명:</s.Title>
        <s.Contents>{props.data?.fetchProduct.name}</s.Contents>
      </s.Container>
      <s.Container>
        <s.Title>상품 설명:</s.Title>
        <s.Contents>{props.data?.fetchProduct.detail}</s.Contents>
      </s.Container>
      <s.Container>
        <s.Title>상품 가격:</s.Title>
        <s.Contents>{props.data?.fetchProduct.price}</s.Contents>
      </s.Container>
      <s.Button onClick={props.onClickMoveToEdit}>수정하기</s.Button>
    </s.Wrapper>
  );
}
