import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlProductPage() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickGraphqlApi = async () => {
    const result = await createProduct({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
    console.log(result.data.createProduct.message);
    console.log(seller);
    console.log(name);
    console.log(detail);
    console.log(price);
  };

  return (
    <>
      판매자 <input type="text" onChange={onChangeSeller}></input>
      <br />
      상품명 <input type="text" onChange={onChangeName}></input>
      <br />
      상세설명 <input type="text" onChange={onChangeDetail}></input>
      <br />
      가격 <input type="text" onChange={onChangePrice}></input>
      <br />
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </>
  );
}
