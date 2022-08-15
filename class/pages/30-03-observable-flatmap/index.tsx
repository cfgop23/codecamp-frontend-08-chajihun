// import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservablePage() {
  const onClickBtn = () => {
    // new Promise(()=>{})
    // new Observable(() => {});

    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // fromPromise
      .flatMap((el) => from([`${el} 결과에 qqq 적용`, `${el} 결과에 zzz 적용`]))
      .subscribe((el) => console.log(el));
  };

  return <button onClick={onClickBtn}>클릭</button>;
}
