import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface FormValue {
  name: string;
  remarks: string;
  price: number;
  contents: string;
}

export interface MarketNewUIProps {
  register: UseFormRegister<FormValue>;
  handleSubmit: UseFormHandleSubmit<FormValue>;
  formState: FormState<FormValue>;
  onClickCreate: SubmitHandler<FormValue>;
  onChangeContents: (value: string) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  contentsError: string;
  imageUrls: string[];
  setFile: Dispatch<SetStateAction<FileList | undefined>>;
  setImageUrls: Dispatch<SetStateAction<string[]>>;
}
