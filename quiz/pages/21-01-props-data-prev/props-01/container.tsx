import Presenter from "./presenter";

// export default function Container() {
//   return (
//     <>
//       <Presenter child="철수" />
//     </>
//   );
// }

export default function Container() {
  const qqq = {
    child: "철수",
  };
  return <div>{Presenter(qqq)}</div>;
}
