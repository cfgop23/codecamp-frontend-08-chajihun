import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    // // 1. Promise.all을 쓰지 않았을 때
    // const resultFile1 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile3 = await uploadFile({ variables: { file: files[2] } });
    // const url1 = resultFile1.data.uploadFile.url;
    // const url2 = resultFile2.data.uploadFile.url;
    // const url3 = resultFile3.data.uploadFile.url;
    // const resultUrls = [url1, url2, url3];

    // // 2. Promise.all을 썼을 때
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    // console.log(results); // const results = [resultFile1, resultFile2, resultFile3]
    // const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url1, url2, url3]

    // 3. Promise.all을 썼을 때(리팩토링)
    const results = await Promise.all(
      // files - [file1, file2, file3]
      files.map((el) => el && uploadFile({ variables: { file: el } }))
      // files.map - [uploadFile({ variables: { file: file1 } }), uploadFile({ variables: { file: file2 } }), uploadFile({ variables: { file: file3 } })]
    );

    console.log(results); // const results = [resultFile1, resultFile2, resultFile3]
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url1, url2, url3]

    // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "aa",
          password: "1234",
          title: "aaa",
          contents: "aaaa",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const isValid = checkValidationFile(file);
      if (!isValid) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          console.log(data.target?.result);

          const tempUrls = [...imageUrls];
          tempUrls[index] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <br />
      <input type="file" onChange={onChangeFile(1)} />
      <br />
      <input type="file" onChange={onChangeFile(2)} />
      <br />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <br />
      <button onClick={onClickGraphqlApi}>글쓰기</button>
    </>
  );
}
