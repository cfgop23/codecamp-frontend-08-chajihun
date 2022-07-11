import axios from "axios";

export default function RestGetPage() {
  const onClickRestApi = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickRestApi}>REST_API 요청하기</button>
    </>
  );
}
