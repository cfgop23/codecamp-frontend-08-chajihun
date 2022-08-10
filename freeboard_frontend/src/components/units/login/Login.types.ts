import { ChangeEvent, MouseEvent } from "react";

export interface ILoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
  loginError: string;
}
