// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 함수 안에 넣어두면 함수가 실행될 때 다운받아오기 때문에 불필요한 코드를 줄일 수 있다.(코드스플릿팅)

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      {/* 여기서 onChange는 임의로 정할 수 없다. 라이브러리 자체 함수임. */}
      <br />
      <button>등록하기</button>
    </div>
  );
}
