import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./MarketNew.queries";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import { FormValue } from "./MarketNew.types";
import {
  IMutation,
  IMutationCreateUseditemArgs,
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

export default function MarketNew() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [contentsError, setContentsError] = useState("");
  const [file, setFile] = useState<FileList>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

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

  return (
    <MarketNewUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreate={onClickCreate}
      onChangeContents={onChangeContents}
      onChangeFile={onChangeFile}
      contentsError={contentsError}
      imageUrls={imageUrls}
      setFile={setFile}
      setImageUrls={setImageUrls}
    />
  );
}
