import * as s from "./MarketNew.styles";
import dynamic from "next/dynamic";
// import InputCreate from "../../../commons/inputs/create";
import "react-quill/dist/quill.snow.css";
import { MarketNewUIProps } from "./MarketNew.types";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import MapComponent from "../../../commons/map";
import DaumPostcode from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketNewUI(props: MarketNewUIProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {props.isModalVisible && (
        <s.AddressModal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </s.AddressModal>
      )}
      <s.Form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onClickCreate
        )}
      >
        <s.Title>상품{props.isEdit ? " 수정" : " 등록"}</s.Title>
        <s.InputWrapper>
          <s.Label>상품명</s.Label>
          <s.InputCreate
            type="text"
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.name || ""}
            {...props.register("name")}
          />
        </s.InputWrapper>
        <s.ErrorMessage>{props.formState.errors.name?.message}</s.ErrorMessage>
        <s.InputWrapper>
          <s.Label>상품 요약</s.Label>
          <s.InputCreate
            type="text"
            placeholder="상품요약을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.remarks || ""}
            {...props.register("remarks")}
          />
        </s.InputWrapper>
        <s.ErrorMessage>
          {props.formState.errors.remarks?.message}
        </s.ErrorMessage>
        <s.InputWrapper>
          <s.Label>상품 내용</s.Label>
          <s.contentsEditor>
            <ReactQuill
              style={{
                width: "100%",
                height: "100%",
              }}
              placeholder="상품을 설명해주세요."
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchUseditem.contents || ""}
            />
          </s.contentsEditor>
        </s.InputWrapper>
        <s.ErrorMessage>{props.contentsError}</s.ErrorMessage>
        <s.InputWrapper>
          <s.Label>판매 가격</s.Label>
          <s.InputCreate
            type="text"
            placeholder="판매 가격을 입력해주세요."
            {...props.register("price")}
            defaultValue={props.data?.fetchUseditem.price || ""}
          />
        </s.InputWrapper>
        <s.ErrorMessage>{props.formState.errors.price?.message}</s.ErrorMessage>
        <s.AddressContainer>
          <s.MapWrapper>
            <MapComponent
              address={
                props.isEdit
                  ? props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  : props.address
              }
            />
          </s.MapWrapper>
          <s.AddressWrapper>
            <s.AddBtnWrapper>
              <s.InputZipcode
                readOnly
                value={
                  props.isEdit
                    ? props.zipcode ||
                      props.data?.fetchUseditem.useditemAddress?.zipcode ||
                      ""
                    : props.zipcode
                }
              />
              <s.AddressBtn onClick={props.onClickAddressSearch}>
                우편번호 검색
              </s.AddressBtn>
            </s.AddBtnWrapper>
            <s.InputCreate
              readOnly
              value={
                props.isEdit
                  ? props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  : props.address
              }
            />
            <s.InputCreate
              type="text"
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.isEdit
                  ? props.data?.fetchUseditem.useditemAddress?.addressDetail!
                  : ""
              }
            />
          </s.AddressWrapper>
        </s.AddressContainer>
        <s.InputWrapper>
          <s.Label>이미지 업로드</s.Label>
          <s.ImgButton onClick={onClickImage}>업로드</s.ImgButton>
          <input
            style={{ display: "none" }}
            type="file"
            multiple={true}
            ref={fileRef}
            onChange={props.onChangeFile}
          />
          {props.imageUrls.map((el) => (
            <s.Img key={uuidv4()} src={el} />
          ))}
        </s.InputWrapper>
        <s.ButtonSubmit isActive={props.formState.isValid}>
          {props.isEdit ? "수정" : "등록"}
        </s.ButtonSubmit>
      </s.Form>
    </>
  );
}
