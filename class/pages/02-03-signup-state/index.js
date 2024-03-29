import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  //이벤트 핸들러 함수 (연결하면 바인딩이라고 한다.)
  function onChangeEmail(event) {
    // console.log(event.target) // 작동된 태그
    // console.log(event.target.value) // 작동된 태그의 값

    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    // 진짜 포장이 잘 됐는지 확인
    console.log(email);
    console.log(password);

    // 검증하기
    if (email.includes("@") === false) {
      //alert("이메일이 올바르지 않습니다. @가 없음!");
      setEmailError("이메일이 올바르지 않습니다!");
    } else {
      // 백엔드 컴퓨터에 API(함수) 요청하기
      alert("회원가입을 축하합니다!");
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail}></input>
      <br />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword}></input>
      <br />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
