import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FormValue {
  name: string;
  remarks: string;
  price: number;
  contents: string;
}

export interface MarketNewProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface MarketNewUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  register: UseFormRegister<FormValue>;
  handleSubmit: UseFormHandleSubmit<FormValue>;
  formState: FormState<FormValue>;
  onClickCreate: SubmitHandler<FormValue>;
  onClickUpdate: SubmitHandler<FormValue>;
  onChangeContents: (value: string) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  contentsError: string;
  imageUrls: string[];
  zipcode: string;
  address: string;
  addressDetail: string;
  isModalVisible: boolean;
  setFile: Dispatch<SetStateAction<FileList | undefined>>;
  setImageUrls: Dispatch<SetStateAction<string[]>>;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  handleOk: () => void;
  handleCancel: () => void;
}
