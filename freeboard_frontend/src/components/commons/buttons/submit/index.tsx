import { useRecoilState } from "recoil";
import { isActiveState } from "../../../../commons/store";
import { Button } from "./Submit.styles";

export interface ButtonSubmitProps {
  name: string;
  onClick?: () => void;
}

export default function ButtonSubmit(props: ButtonSubmitProps) {
  const [isActive] = useRecoilState(isActiveState);
  return (
    <Button onClick={props.onClick} isActive={isActive}>
      {props.name}
    </Button>
  );
}
