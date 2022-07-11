import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Quiz09UI from "./06-routing.presenter";
import { CREATE_BOARD } from "./06-routing.queries";
import RoutingPageUI from "./06-routing.presenter";

export default function RoutingPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [abled, setAbled] = useState(true);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: writer,
          title: title,
          contents: contents,
        },
      });

      router.push(`/06-routed/${result.data.createBoard.number}`);
      console.log(result.data.createBoard.number);
      console.log(result.data.createBoard.message);
    } catch (error) {
      console.log(error.message);
      alert("error");
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setAbled(false);
    } else {
      setAbled(true);
    }
  };

  return (
    <RoutingPageUI
      onClickGraphqlApi={onClickGraphqlApi}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      abled={abled}
    />
  );
}
