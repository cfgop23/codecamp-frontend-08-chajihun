import * as s from "./MarketNew.styles";
import dynamic from "next/dynamic";
import InputCreate from "../../../commons/inputs/create";
import "react-quill/dist/quill.snow.css";
import { MarketNewUIProps } from "./MarketNew.types";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketNewUI(props: MarketNewUIProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <s.Form onSubmit={props.handleSubmit(props.onClickCreate)}>
      <s.Title>상품등록</s.Title>
      <s.InputWrapper>
        <s.Label>상품명</s.Label>
        <InputCreate
          type="text"
          register={props.register("name", { required: true })}
        />
        <s.ErrorMessage>{props.formState.errors.name?.message}</s.ErrorMessage>
      </s.InputWrapper>
      <s.InputWrapper>
        <s.Label>상품설명</s.Label>
        <InputCreate
          type="text"
          register={props.register("remarks", { required: true })}
        />
        <s.ErrorMessage>
          {props.formState.errors.remarks?.message}
        </s.ErrorMessage>
      </s.InputWrapper>
      <s.InputWrapper>
        <s.Label>상세설명</s.Label>
        <s.contentsEditor>
          <ReactQuill
            style={{ width: "600px", height: "400px" }}
            onChange={props.onChangeContents}
          />
        </s.contentsEditor>
        <s.ErrorMessage>{props.contentsError}</s.ErrorMessage>
      </s.InputWrapper>
      <s.InputWrapper>
        <s.Label>판매가격</s.Label>
        <InputCreate
          type="text"
          register={props.register("price", { required: true })}
        />
        <s.ErrorMessage>{props.formState.errors.price?.message}</s.ErrorMessage>
      </s.InputWrapper>
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
        등록하기
      </s.ButtonSubmit>
    </s.Form>
  );
}
