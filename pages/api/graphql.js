import { mergeTypeDefs, mergeResolvers } from "@graphql-toolkit/schema-merging";
import { ApolloServer, gql } from "apollo-server-micro";
import connectDB from "../../lib/mongodb";
import habitsTypedefs from "../../api/habits/habits.graphql";
import habitsMutationResolvers from "../../api/habits/mutation";
import habitsQueryResolvers from "../../api/habits/query";

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const fakeResolvers = {
  Query: {
    sayHello() {
      return "Hello World!";
    }
  }
};

const typeDefs = mergeTypeDefs([fakeTypeDefs, habitsTypedefs]);
const resolvers = mergeResolvers([
  fakeResolvers,
  habitsQueryResolvers,
  habitsMutationResolvers
]);

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const server = apolloServer.createHandler({ path: "/api/graphql" });

export default connectDB(server);
