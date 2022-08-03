import { ChangeEvent, useState } from "react";

const initResult = { date: "", phone: "", email: "" };
export default function RegexPage() {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(initResult);

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClickDate = () => {
    if (!date.match(/^\d{4}\.\d{2}\.\d{2}$/)) {
      alert("error!");
      return;
    }
    setResult({
      ...initResult,
      date,
      phone,
      email,
    });
    alert("success!");
  };

  const onClickPhone = () => {
    if (!phone.match(/^\d{3}-\d{3,4}-\d{4}$/)) {
      alert("error!");
      return;
    }
    setResult({
      ...initResult,
      date,
      phone,
      email,
    });
    alert("success!");
  };

  const onClickEmail = () => {
    if (!email.match(/^\w+@\w+\.\w+$/)) {
      alert("error!");
      return;
    }
    setResult({
      ...initResult,
      date,
      phone,
      email,
    });
    alert("success!");
  };

  return (
    <>
      <div>
        1. <input type="text" onChange={onChangeDate} />
        <button onClick={onClickDate}>확인</button>
        {result.date}
      </div>

      <div>
        2. <input type="text" onChange={onChangePhone} />
        <button onClick={onClickPhone}>확인</button>
        {result.phone}
      </div>
      <div>
        3. <input type="text" onChange={onChangeEmail} />
        <button onClick={onClickEmail}>확인</button>
        {result.email}
      </div>
    </>
  );
}
