import {
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface FormValue {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
}

export interface SignupUIProps {
  onClickButton: SubmitHandler<FormValue>;
  register: UseFormRegister<FormValue>;
  handleSubmit: UseFormHandleSubmit<FormValue>;
  formState: FormState<FormValue>;
}
