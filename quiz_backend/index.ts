import { DataSource } from "typeorm";
import { Product } from "./Product.postgres";
import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const typeDefs = gql`
  type ProductReturn {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
    createdAt: String
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts: [ProductReturn]
    fetchProduct(productId: ID): ProductReturn
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String

    deleteProduct(productId: ID): String

    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find();
      return result;
    },
    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({ where: { _id: args.productId } });
      return result;
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "등록에 성공했습니다.";
    },

    updateProduct: async (_: any, args: any) => {
      await Product.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );
      return "수정되었습니다.";
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.update(
        {
          _id: args.productId,
        },
        { deletedAt: new Date() }
      );
      return "삭제되었습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5015,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Product],
});

AppDataSource.initialize().then(() => {
  console.log("DB 연결 성공");

  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
