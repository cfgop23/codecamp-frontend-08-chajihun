import { MouseEvent } from "react";

export interface ILayoutHeaderUIProps {
  onClickToHome: () => void;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
