import BoardWrite from "../../../src/components/units/21-recoil/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";

export default function BoardWritePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <BoardWrite />;
}
