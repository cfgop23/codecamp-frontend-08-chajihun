import { gql, useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

// const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
//   mutation createPointTransactionOfLoading($impUid: ID!) {
//     createPointTransactionOfLoading(impUid: $impUid) {
//       _id
//       impUid
//     }
//   }
// `;

export default function ChoicePage() {
  const router = useRouter();
  const [cash, setCash] = useState(0);
  // const [createPointTransactionOfLoading] = useMutation(
  //   CREATE_POINT_TRANSACTION_OF_LOADING
  // );
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickPay = () => {
    console.log(data);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp06461023"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis.INIpayTest",
        // pg: "nice",
        // pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "결제 테스트",
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
          // const result = createPointTransactionOfLoading({
          //   variables: {
          //     impUid: rsp.imp_uid,
          //   },
          // });
          // console.log(result);
          router.push("/28-payment/complete");
        } else {
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };
  const onChangeChoice = (e: ChangeEvent<HTMLInputElement>) => {
    setCash(Number(e.target.id));
  };

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        <input type="radio" id="100" name="cash" onChange={onChangeChoice} />
        <label htmlFor="500"> 100원</label>
      </div>
      <div>
        <input type="radio" id="1000" name="cash" onChange={onChangeChoice} />
        <label htmlFor="1000"> 1000원</label>
      </div>
      <div>
        <input type="radio" id="2000" name="cash" onChange={onChangeChoice} />
        <label htmlFor="2000"> 2000원</label>
      </div>
      <div>
        <input type="radio" id="5000" name="cash" onChange={onChangeChoice} />
        <label htmlFor="5000"> 5000원</label>
      </div>
      <button onClick={onClickPay}>충전하기</button>
    </div>
  );
}
// rsp
// apply_num: ""
// bank_name: null
// buyer_addr: "서울특별시 강남구 신사동"
// buyer_email: "gildong@gmail.com"
// buyer_name: "홍길동"
// buyer_postcode: "01181"
// buyer_tel: "010-4242-4242"
// card_name: null
// card_number: "*********"
// card_quota: 0
// currency: "KRW"
// custom_data: null
// imp_uid: "imp_553639811984"
// merchant_uid: "nobody_1660215639659"
// name: "결제 테스트"
// paid_amount: 100
// paid_at: 1660215692
// pay_method: "point"
// pg_provider: "html5_inicis"
// pg_tid: "StdpayCARDINIpayTest20220811200131606144"
// pg_type: "payment"
// receipt_url: "https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/mCmReceipt_head.jsp?noTid=StdpayCARDINIpayTest20220811200131606144&noMethod=1"
// status: "paid"
// success: true
