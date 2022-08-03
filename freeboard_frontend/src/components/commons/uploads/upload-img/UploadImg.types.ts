import { ChangeEvent, RefObject } from "react";

export interface IUploadImgProps {
  index: number;
  imgUrl: string;
  //   defaultFileUrl?: string;
  onChangeImgUrl: (imgUrl: string, index: number) => void;
}

export interface IUploadImgUIProps {
  fileRef: RefObject<HTMLInputElement>;
  imgUrl: string;
  //   defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeImg: (event: ChangeEvent<HTMLInputElement>) => void;
}
