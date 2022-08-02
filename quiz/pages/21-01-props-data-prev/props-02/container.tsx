import Presenter from "./presenter";

export default function Container() {
  const qqq = {
    child: "철수",
    age: 13,
  };
  return <div>{Presenter(qqq)}</div>;
}
