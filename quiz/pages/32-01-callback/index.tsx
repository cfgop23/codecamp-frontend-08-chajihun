// `http://numbersapi.com/random?min=1&max=200`
// `http://koreanjson.com/posts/${num}`
// `http://koreanjson.com/posts?userId=${userId}`

import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CallbackPromiseAsyncAwaitPage() {
  const [result, setResult] = useState<any>([]);

  const onclickCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aa.send();
    aa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0]; // 랜덤 숫자

      const bb = new XMLHttpRequest();
      bb.open("get", `http://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const cc = new XMLHttpRequest();
        cc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res: any) => {
          console.log(res);
          const result = JSON.parse(res.target.response);
          setResult(result);
        });
      });
    });
  };

  const onclickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res: any) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setResult(res.data);
      });
  };

  const onclickAsyncAwait = async () => {
    const res1 = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    const res3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );
    setResult(res3.data);
  };

  return (
    <>
      <button onClick={onclickCallback}>Callback 요청하기</button>
      <button onClick={onclickPromise}>Promise 요청하기</button>
      <button onClick={onclickAsyncAwait}>AsyncAwait 요청하기</button>
      {result.map((el: any) => (
        <>
          <div key={uuidv4()}>{el.id}</div>
          <div>{el.title}</div>
          <div>{el.content}</div>
        </>
      ))}
    </>
  );
}
