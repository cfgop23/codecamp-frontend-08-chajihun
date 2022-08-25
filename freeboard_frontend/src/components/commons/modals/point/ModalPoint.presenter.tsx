import Script from "next/script";
import * as s from "./ModalPoint.styles";

export default function ModalPointUI(props: any) {
  return (
    <>
      {/* <!-- jQuery --> */}
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <s.ModalOverlay />
      <s.Wrapper>
        <s.ModalWrapper>
          <s.Div>
            <s.Cancel onClick={props.onClickCancel}>X</s.Cancel>
          </s.Div>
          <s.Title>충전하실 금액을 선택해주세요!</s.Title>
          <s.Select onChange={props.onChangeChoice} value={props.cash}>
            <option selected>포인트 선택</option>
            <option value={100}>100</option>
            <option value={500}>500</option>
            <option value={2000}>2000</option>
            <option value={5000}>5000</option>
          </s.Select>
          <s.Button isActive={props.isActive} onClick={props.onClickPay}>
            충전하기
          </s.Button>
        </s.ModalWrapper>
      </s.Wrapper>
    </>
  );
}
