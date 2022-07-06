import { useState } from "react";

export default function SignupPage() {
  function hello1() {
    let hello1 = "반갑습니다";
    document.getElementById("qqq").innerText = hello1;
  }

  const [hello2, setHello2] = useState("안녕하세요");

  function helloChange() {
    setHello2("반갑습니다");
  }

  function counterUp() {
    let count1 = Number(document.getElementById("www").innerText) + 1;
    document.getElementById("www").innerText = count1;
  }

  const [count2, setCount2] = useState(0);

  function countUp() {
    setCount2(count2 + 1);
  }

  function random() {
    let number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("eee").innerText = number;
  }

  const [randomNum, setRandomNum] = useState("000000");

  function random2() {
    setRandomNum(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  }

  //회원가입
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangePasswordConfirm(event) {
    setConfirm(event.target.value);
  }

  //   function aaa(event) {
  //     setEmailCorrect(false);
  //   }

  //   function bbb(event) {
  //     setPasswordCorrect(false);
  //   }

  //   let emailCorrect = false;
  //   let passwordCorrect = false;

  function onClickSignup(event) {
    console.log(email);
    console.log(password);
    console.log(confirm);

    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다!");
    } else {
      setEmailError("");
      setEmailCorrect(true);
    }

    if (password !== confirm) {
      setPasswordError("비밀번호가 올바르지 않습니다.");
    } else {
      setPasswordError("");
      setPasswordCorrect(true);
    }

    if (emailCorrect === true && passwordCorrect === true) {
      alert("회원가입을 축하합니다.");
      return;
    }
  }

  const errorColor = {
    color: "red",
  };

  return (
    <>
      <h3>1-1</h3>
      <button id="qqq" onClick={hello1}>
        안녕하세요
      </button>
      <h3>1-2</h3>
      <button onClick={helloChange}>{hello2}</button>
      <h3>2-1</h3>
      <div id="www">0</div>
      <button onClick={counterUp}>카운트 증가</button>
      <h3>2-2</h3>
      <div>{count2}</div>
      <button onClick={countUp}>카운트 증가</button>
      <h3>3-1</h3>
      <div id="eee">000000</div>
      <button onClick={random}>인증번호 전송</button>
      <h3>3-2</h3>
      <div>{randomNum}</div>
      <button onClick={random2}>인증번호 전송</button>
      <h3>4</h3>
      <input type="text" placeholder="이메일" onChange={onChangeEmail}></input>
      <br />
      <div style={errorColor}>{emailError}</div>
      <br />
      <input
        type="text"
        placeholder="비밀번호"
        onChange={onChangePassword}
      ></input>
      <br />
      <br />
      <input
        type="text"
        placeholder="비밀번호 확인"
        onChange={onChangePasswordConfirm}
      ></input>
      <br />
      <br />
      <div style={errorColor}>{passwordError}</div>
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}
