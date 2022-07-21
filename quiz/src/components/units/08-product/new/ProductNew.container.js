import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductNew.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import ProductNewUI from "./ProductNew.presenter";

export default function ProductNew(props) {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  // const [mycolor, setMycolor] = useState(false);
  // const [sellerError, setSellerError] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [detailError, setDetailError] = useState("");
  // const [priceError, setPriceError] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    // if (event.target.value && title && contents) {
    //   setMycolor(true);
    //   setSellerError("");
    // } else {
    //   setMycolor(false);
    // }
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    // if (event.target.value && title && contents) {
    //   setMycolor(true);
    //   setNameError("");
    // } else {
    //   setMycolor(false);
    // }
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    // if (event.target.value && title && contents) {
    //   setMycolor(true);
    //   setDetailError("");
    // } else {
    //   setMycolor(false);
    // }
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
    // if (event.target.value && title && contents) {
    //   setMycolor(true);
    //   setPriceError("");
    // } else {
    //   setMycolor(false);
    // }
  };

  const onClickCreate = async () => {
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
      console.log(result);
      console.log(result.data.createProduct.message);
      router.push(`/08-product/${result.data.createProduct._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.productId,
          updateProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      router.push(`/08-product/${result.data.updateProduct._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductNewUI
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      isEdit={props.isEdit}
    />
  );
}
