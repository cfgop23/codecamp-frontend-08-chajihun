// 여기가 API 메인 소스코드
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

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
  console.log("연결성공");
});
