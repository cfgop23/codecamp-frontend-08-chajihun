export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "ddd=맹구";
  };
  // 쿠키는 백엔드와 데이터를 주고 받을 때 사용

  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickLoadCookie = () => {
    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="));
    console.log(myCookie);
  };

  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>
      ===================================
      <button onClick={onClickLoadCookie}>쿠키 조회</button>
      <button onClick={onClickLoadLocal}>로컬 조회</button>
      <button onClick={onClickLoadSession}>세션 조회</button>
    </>
  );
}
