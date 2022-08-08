import { useQuery, useMutation } from "@apollo/client";
import ApolloCacheStateUI from "../../src/components/units/25-apollo-cache-state/ApolloCacheState.presenter";
import {
  CREATE_BOARD,
  DELETE_BOARD,
  FETCH_BOARDS,
} from "../../src/components/units/25-apollo-cache-state/ApolloCacheState.queries";
import { Data } from "../../src/components/units/25-apollo-cache-state/ApolloCacheState.types";

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: { boardId },

      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickCreate = (data: Data) => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      update(cache, result) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [result.data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <ApolloCacheStateUI
      onClickDelete={onClickDelete}
      onClickCreate={onClickCreate}
      data={data}
    />
  );
}
