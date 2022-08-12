// `http://numbersapi.com/random?min=1&max=200`
// `http://koreanjson.com/posts/${num}`
// `http://koreanjson.com/posts?userId=${userId}`

import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
    const onclickCallback = () => {
        // 콜백지옥
        const aa = new XMLHttpRequest();
        aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
        aa.send();
        aa.addEventListener("load", (res: any) => {
            console.log(res);
            const num = res.target.response.split(" ")[0]; // 랜덤 숫자

            const bb = new XMLHttpRequest();
            bb.open("get", `http://koreanjson.com/posts/${num}`);
            bb.send();
            bb.addEventListener("load", (res: any) => {
                const userId = JSON.parse(res.target.response).UserId;

                const cc = new XMLHttpRequest();
                cc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
                cc.send();
                cc.addEventListener("load", (res) => {
                    console.log(res);
                });
            });
        });
    };

    // const myaxios = {
    //     get: (url: string) => {
    //         return new Promise((resolve, reject) => {
    //             // 오래 걸리는 작업(ex, API 요청하기)
    //             const qq = new XMLHttpRequest();
    //             qq.open("get", url);
    //             qq.send();
    //             qq.addEventListener("load", (res: any) => {
    //                 resolve(res.target.response);
    //             });
    //         });
    //     },
    // };

    // myaxios.get("http://koreanjson.com/posts/1").then((res) => {});
    // axios는 promise로 만들어짐.

    const onclickPromise = () => {
        console.log("1번 실행");
        axios
            .get("http://koreanjson.com/posts/1")
            .then((res) => {
                console.log("2번 실행");
                return axios.get("http://koreanjson.com/posts/2");
            })
            .then((res) => {
                console.log("3번 실행");
                return axios.get("http://koreanjson.com/posts/3");
            })
            .then((res) => {
                console.log("4번 실행");
            });
        console.log("5번 실행");
    }; // 실제 실행하면 1 5 2 3 4 순서로 실행됨.

    const onclickAsyncAwait = async () => {
        const result1 = await axios.get("첫번째 주소");
        const result2 = await axios.get("두번째 주소");
        const result3 = await axios.get("세번째 주소");
        // await는 아무것이나 기다리는 게 아니라 promise가 있는 것만 기다림.
    };

    return (
        <>
            <button onClick={onclickCallback}>Callback 요청하기</button>
            <button onClick={onclickPromise}>Promise 요청하기</button>
            <button onClick={onclickAsyncAwait}>AsyncAwait 요청하기</button>
        </>
    );
}
