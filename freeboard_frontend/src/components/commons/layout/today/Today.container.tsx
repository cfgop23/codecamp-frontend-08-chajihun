import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todayState } from "../../../../commons/store";
import TodayUI from "./Today.presenter";

export default function Today() {
  // const [todays, setTodays] = useState([]);
  const [todays, setTodays] = useRecoilState(todayState);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("todays") || "[]");
    if (!result) return;
    console.log(result);
    setTodays(result);
  }, []);

  return <TodayUI todays={todays} />;
}
