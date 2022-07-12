import * as S from "./07-delete.styles";

export default function DeletePageUI(props) {
  return (
    <>
      {props.data?.fetchProducts.map((el) => (
        <S.Row key={el._id}>
          <S.Column>
            <input type={"checkbox"} />
          </S.Column>
          <S.Column>{el.seller}</S.Column>
          <S.Column>{el.name}</S.Column>
          <S.Column>{el.detail}</S.Column>
          <S.Column>{el.price}</S.Column>
          <S.Column>
            <button id={el._id} onClick={props.onClickDelete}>
              삭제
            </button>
          </S.Column>
        </S.Row>
      ))}
    </>
  );
}
