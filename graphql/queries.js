import gql from "graphql-tag";

export const GET_HABITS = gql`
  query {
    habits {
      id
      name
      events {
        id
        date
      }
    }
  }
`;
