import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { IUseditem } from "../../../../commons/types/generated/types";

const Button = styled.button`
  width: 150px;
  height: 52px;
  background: white;
  border: 1px solid gray;
  font-weight: 500;
  font-size: 18px;
  margin: 0 20px;

  cursor: pointer;
  :hover {
    background-color: #7a583a;
    color: white;
  }
`;

export default function BasketButton(props: any) {
  const router = useRouter();
  const onClickPut = (basket: IUseditem) => () => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") || "[]"
    );

    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      return;
    }

    baskets.push(basket);

    localStorage.setItem("baskets", JSON.stringify(baskets));
    const move = confirm(
      "장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?"
    );
    if (move) {
      router.push("/mypage/basket");
    }
  };

  return <Button onClick={onClickPut(props.data)}>장바구니</Button>;
}
