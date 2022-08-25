import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./MarketNew.queries";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import { FormValue, MarketNewProps } from "./MarketNew.types";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
  IUseditemAddressInput,
} from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import MarketNewUI from "./MarketNew.presenter";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";

const schema = yup.object({
  name: yup
    .string()
    .max(10, "상품명은 10자 이내로 작성해주세요.")
    .required("상품명을 입력해주세요."),
  remarks: yup
    .string()
    .max(20, "상품설명은 20자 이내로 작성해주세요.")
    .required("상품설명을 입력해주세요."),
  price: yup
    .number()
    .required("값을 입력해주세요.")
    .typeError("값을 입력해주세요."),
  //   contents: yup
  //     .string()
  //     .max(1000, "내용은 1000자 이내로 작성해주세요.")
  //     .required("내용을 입력해주세요."),
});

export default function MarketNew(props: MarketNewProps) {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [contentsError, setContentsError] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [file, setFile] = useState<FileList>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  const { register, handleSubmit, formState, trigger, setValue } =
    useForm<FormValue>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents: (value: string) => void = (value: string) => {
    if (value === "<p><br></p>") {
      setContentsError("상세설명을 입력해주세요.");
    } else {
      setContentsError("");
      setValue("contents", value === "<p><br></p>" ? "" : value);
      trigger("contents");
    }
  };

  const onClickCreate: SubmitHandler<FormValue> = async (data) => {
    if (!accessToken) {
      const move = confirm(
        "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
      );
      if (move) {
        router.push("/login");
      }
      return;
    }

    const url = [];
    if (file) {
      for (let i = 0; i < file?.length; i++) {
        const resultFile = await uploadFile({ variables: { file: file[i] } });
        url.push(resultFile.data.uploadFile.url);
      }
    }

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: url,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(result);
      alert("상품등록이 완료되었습니다.");
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsModalVisible(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || undefined;
    setFile(files);
    if (!files) return;
    for (let i = 0; i < files?.length; i++) {
      const isValid = checkValidationFile(files[i]);
      if (!isValid) return;
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);
      fileReader.onload = (data) => {
        const url = data.target?.result;
        console.log(url);
        const urlSub = url?.toString();
        if (urlSub) {
          setImageUrls((imageUrls) => [...imageUrls, urlSub]);
        }
      };
    }
  };

  const onClickUpdate: SubmitHandler<FormValue> = async (data) => {
    const updateUseditemInput: IUpdateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.price) updateUseditemInput.price = data.price;
    if (data.contents) updateUseditemInput.contents = data.contents;

    const useditemAddressInput: IUseditemAddressInput = {};
    if (zipcode) useditemAddressInput.zipcode = zipcode;
    if (address) useditemAddressInput.address = address;
    if (addressDetail) useditemAddressInput.addressDetail = addressDetail;
    if (useditemAddressInput)
      updateUseditemInput.useditemAddress = { ...useditemAddressInput };

    if (updateUseditemInput) {
      try {
        const result = await updateUseditem({
          variables: {
            updateUseditemInput,
            useditemId: String(router.query.marketId),
          },
        });
        console.log(result);
        await router.push(`/market/${result.data?.updateUseditem._id}`);
        alert("상품수정이 완료되었습니다.");
        location.reload();
      } catch (error) {
        getErrorMessage(error);
      }
    }
  };

  return (
    <MarketNewUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFile={onChangeFile}
      handleOk={handleOk}
      handleCancel={handleCancel}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      isModalVisible={isModalVisible}
      contentsError={contentsError}
      imageUrls={imageUrls}
      isEdit={props.isEdit}
      data={props.data}
      setFile={setFile}
      setImageUrls={setImageUrls}
    />
  );
}
