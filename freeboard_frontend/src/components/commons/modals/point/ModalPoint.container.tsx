import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/signin/SignIn.queries";
import ModalPointUI from "./ModalPoint.presenter";
import { CREATE_POINT } from "./ModalPoint.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ModalPoint() {
  const [cash, setCash] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT);

  const onClickPay = () => {
    console.log(data);
    const IMP = window.IMP; // 생략 가능
    // IMP.init("imp06461023");
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis.INIpayTest",
        // pg: "nice",
        // pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: `포인트 ${cash}P 충전`,
        amount: cash,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          const result = createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
          setIsOpen(false);
          location.reload();
        } else {
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };

  const onChangeChoice = (e: any) => {
    setCash(Number(e.target.value));
    setIsActive(true);
    console.log(cash);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickMask = (e: any) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <ModalPointUI
      onClickMask={onClickMask}
      onClickPay={onClickPay}
      onChangeChoice={onChangeChoice}
      onClickCancel={onClickCancel}
      isActive={isActive}
      cash={cash}
    />
  );
}
