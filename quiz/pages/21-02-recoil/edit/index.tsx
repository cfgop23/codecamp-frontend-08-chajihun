import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import BoardWrite from "../../../src/components/units/21-recoil/BoardWrite.container";

export default function BoardEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <BoardWrite />;
}
