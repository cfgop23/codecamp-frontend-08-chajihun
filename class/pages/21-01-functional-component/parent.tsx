import ChildPage from "./child";

export default function ParentPage() {
  const qqq = {
    count: 200,
  };
  //   return <ChildPage count={100} />;
  return <div>{ChildPage(qqq)}</div>;
  // return <div>{ChildPage({ count: 300 })}</div>;
}
