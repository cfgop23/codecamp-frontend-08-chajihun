import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import UploadImgUI from "./UploadImg.presenter";
import { UPLOAD_FILE } from "./UploadImg.queries";
import { IUploadImgProps } from "./UploadImg.types";
import { checkValidationImage } from "./UploadImg.validation";

export default function UploadImg(props: IUploadImgProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const img = checkValidationImage(event.target.files?.[0]);
    if (!img) return;

    try {
      const result = await uploadFile({ variables: { file: img } });
      props.onChangeImgUrl(result.data?.uploadFile.url!, props.index);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <UploadImgUI
      fileRef={fileRef}
      imgUrl={props.imgUrl}
      onClickUpload={onClickUpload}
      onChangeImg={onChangeImg}
    />
  );
}
