import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    // 1. 진짜(누구든 볼 수 있는) URL 생성
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };

    // 2. 가짜(나만 볼 수 있는) URL 생성
    const result = URL.createObjectURL(file);
    setImgUrl(result);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button>글쓰기</button>
    </>
  );
}
