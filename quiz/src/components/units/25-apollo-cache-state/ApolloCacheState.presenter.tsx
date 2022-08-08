import * as s from "./ApolloCacheState.styles";
import { useForm } from "react-hook-form";
import { ApolloCacheStateUIProps, FormValue } from "./ApolloCacheState.types";

export default function ApolloCacheStateUI(props: ApolloCacheStateUIProps) {
  const { register, handleSubmit } = useForm<FormValue>();

  return (
    <s.Wrapper>
      <s.RowHeader>
        <s.Column>ID</s.Column>
        <s.Column>작성자</s.Column>
        <s.Column>제목</s.Column>
        <s.ColumnContents>내용</s.ColumnContents>
      </s.RowHeader>
      {props.data?.fetchBoards.map((el) => (
        <s.Row key={el._id}>
          <s.Column>{el._id}</s.Column>
          <s.Column>{el.writer}</s.Column>
          <s.Column>{el.title}</s.Column>
          <s.Column>{el.contents}</s.Column>
          <button onClick={props.onClickDelete(el._id)}>X</button>
        </s.Row>
      ))}
      <s.Form onSubmit={handleSubmit(props.onClickCreate)}>
        작성자: <input type="text" {...register("writer")}></input>
        비밀번호: <input type="password" {...register("password")}></input>
        제목: <input type="text" {...register("title")}></input>
        내용: <input type="text" {...register("contents")}></input>
        <button>등록하기</button>
      </s.Form>
    </s.Wrapper>
  );
}
