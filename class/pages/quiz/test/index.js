import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  function onChangeEmail(event) {
    setEmail(event.target.value);
    if (event.target.value.includes("@") === false) {
      console.log("이메일 틀림");
      setEmailError("이메일이 올바르지 않습니다!");
    } else {
      console.log("이메일 맞음");
      setEmailError("");
      setEmailCorrect(true);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangePasswordConfirm(event) {
    setConfirm(event.target.value);
    if (event.target.value !== password) {
      console.log("pw 틀림");
      setPasswordError("비밀번호가 올바르지 않습니다.");
    } else {
      console.log("pw 맞음");
      setPasswordError("");
      setPasswordCorrect(true);
    }
  }

  //   function emailFunc(event) {
  //     console.log("이메일 확인 호출");
  //     if (email.includes("@") === false) {
  //       console.log("이메일 틀림");
  //       setEmailError("이메일이 올바르지 않습니다!");
  //     } else {
  //       console.log("이메일 맞음");
  //       setEmailError("");
  //       setEmailCorrect(true);
  //     }
  //   }

  //   function passwordFunc(event) {
  //     console.log("pw 확인 호출");
  //     if (password !== confirm) {
  //       console.log("pw 틀림");
  //       setPasswordError("비밀번호가 올바르지 않습니다.");
  //     } else {
  //       console.log("pw 맞음");
  //       setPasswordError("");
  //       setPasswordCorrect(true);
  //     }
  //   }

  function onClickSignup(event) {
    // emailFunc();
    // console.log("이메일 검증 호출");
    console.log(emailCorrect);
    // passwordFunc();
    // console.log("pw검증 호출");
    console.log(passwordCorrect);
    if (emailCorrect === true && passwordCorrect === true) {
      console.log("emailcorrect");
      console.log(emailCorrect);
      console.log("passwordcorrect");
      console.log(passwordCorrect);
      alert("회원가입을 축하합니다.");
      return;
    }
  }

  const errorColor = {
    color: "red",
  };

  return (
    <>
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
// dfdasfojasdofioifiojoa
