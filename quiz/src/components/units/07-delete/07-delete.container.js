import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCTS, DELETE_PRODUCT } from "./07-delete.queries";
import DeletePageUI from "./07-delete.presenter";

export default function DeletePage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCTS);
  const onClickDelete = (event) => {
    deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return <DeletePageUI onClickDelete={onClickDelete} data={data} />;
}
