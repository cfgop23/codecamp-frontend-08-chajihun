// 여기가 API 메인 소스코드
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";
// const { ApolloServer, gql } = require('apollo-server');

// DOCS
const typeDefs = gql`
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String # 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String # 실무용(backend08)
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 수정 시
      // Board.update({number: 3}, {writer: "영희"})

      // 삭제 시
      // Board.delete({number:3})

      // 실무에서는 삭제를 하더라도 실제로 삭제하지 않고 DB에 삭제 관련 열을 추가하여 구분
      // Board.update({ number: 3 }, { isDeleted: true });
      // Board.update({ number: 3 }, { deletedAt: new Date()});

      return "게시글 등록에 성공했습니다.";
    },
    // updateBoard: () =>{},
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // cors: {
  //   origin: ["", ""]
  // } // 특정 사이트에 오픈할 때
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5015,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize().then(() => {
  console.log("DB 연결 성공");

  server.listen(4000).then(({ url }) => {
    console.log("서버 실행 성공");
  });
});
