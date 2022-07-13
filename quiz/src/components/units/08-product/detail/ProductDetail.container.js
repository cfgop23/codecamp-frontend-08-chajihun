import ProductDetailUI from "./ProductDetail.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  console.log(data);
  console.log(router);

  const onClickMoveToEdit = () => {
    router.push(`/08-product/${router.query.productId}/edit`);
  };
  return <ProductDetailUI data={data} onClickMoveToEdit={onClickMoveToEdit} />;
}
