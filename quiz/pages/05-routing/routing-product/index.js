import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
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

export default function RoutingPage() {
  const router = useRouter();
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

  const onClickResist = async () => {
    try {
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
      router.push(
        `/quiz/05-routing/routed-product/${result.data.createProduct._id}`
      );
      console.log(result);
      console.log(result.data.createProduct._id);
      console.log(result.data.createProduct.message);
    } catch (error) {
      console.log(error.message);
      alert("error");
    }
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller}></input>
      <br />
      상품명: <input type="text" onChange={onChangeName}></input>
      <br />
      상품내용: <input type="text" onChange={onChangeDetail}></input>
      <br />
      상품가격: <input type="text" onChange={onChangePrice}></input>
      <br />
      <button onClick={onClickResist}>상품등록</button>
    </>
  );
}
