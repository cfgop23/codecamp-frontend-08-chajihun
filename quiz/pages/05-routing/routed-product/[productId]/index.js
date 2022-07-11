import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function RoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  console.log(data);
  console.log(router);

  return (
    <>
      <div>판매자: {data?.fetchProduct.seller}</div>
      <div>상품명: {data && data.fetchProduct.name}</div>
      <div>상품내용: {data ? data.fetchProduct.detail : "loading..."}</div>
      <div>상품가격: {data?.fetchProduct.price}</div>
    </>
  );
}
