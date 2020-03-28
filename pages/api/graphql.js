import { ApolloServer, gql } from "apollo-server-micro";
import connectDB from "../../lib/mongodb";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello() {
      return "Hello World!";
    }
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const server = apolloServer.createHandler({ path: "/api/graphql" });

export default connectDB(server);
