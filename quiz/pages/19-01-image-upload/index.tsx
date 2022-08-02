import {
  Fragment,
  FileInput,
  CreateButton,
  Div,
  Img,
  LikeIcon,
} from "./styles";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      contents
      images
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

const initialInputs = { writer: "", password: "", title: "", contents: "" };

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState(initialInputs);
  const [imageUrl, setImageUrl] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const _inputs = {
      ...inputs,
      [event?.target.id]: event.target.value,
    };
    setInputs(_inputs);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      Modal.error({ content: "error!" });
    }
  };

  const onClickSubmit = async () => {
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              images: [imageUrl],
            },
          },
        });
        console.log(result.data);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <Fragment>
      <Div>
        작성자:{" "}
        <input
          type="text"
          placeholder="이름을 적어주세요."
          onChange={onChangeInputs}
          id="writer"
        />
      </Div>
      <Div>
        비밀번호:{" "}
        <input
          type="password"
          placeholder="비밀번호를 작성해주세요."
          onChange={onChangeInputs}
          id="password"
        />
      </Div>
      <Div>
        제목:{" "}
        <input
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeInputs}
          id="title"
        />
      </Div>
      <Div>
        내용:{" "}
        <input
          type="textarea"
          placeholder="내용을 작성해주세요."
          onChange={onChangeInputs}
          id="contents"
        />
      </Div>
      <LikeIcon onClick={onClickImage} />
      <Div>
        <FileInput
          type="file"
          onChange={onChangeFile}
          accept="image/jpeg, image/png"
          ref={fileRef}
        />
        <Img src={`https://storage.googleapis.com/${imageUrl}`} />
      </Div>
      <CreateButton onClick={onClickSubmit}>등록하기</CreateButton>
    </Fragment>
  );
}
