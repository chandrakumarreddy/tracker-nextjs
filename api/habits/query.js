import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import HabitModel from "./habit";

export default {
  Query: {
    async habits() {
      try {
        return HabitModel.find({});
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  })
};
