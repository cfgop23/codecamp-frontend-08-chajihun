import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./06-routing.queries";
import RoutingPageUI from "./06-routing.presenter";

export default function RoutingPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [isWriter, setIsWriter] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [isContents, setIsContents] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer,
          title,
          contents,
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
    if (event.target.value) {
      setIsWriter(true);
    } else {
      setIsWriter(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setIsContents(true);
    } else {
      setIsContents(false);
    }
  };

  const onButton = () => {
    if (isWriter && isTitle && isContents) {
      setIsButton(false);
    } else setIsButton(true);
    return isButton;
  };

  setTimeout(onButton);

  return (
    <RoutingPageUI
      onClickGraphqlApi={onClickGraphqlApi}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isButton={isButton}
    />
  );
}
