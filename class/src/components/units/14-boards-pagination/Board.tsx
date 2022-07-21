import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function Board(props: any) {
  return (
    <>
      {props.data?.fetchBoards.map((el: any) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </>
  );
}
