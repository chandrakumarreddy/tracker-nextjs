import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";

const QUERY = gql`
  query {
    sayHello
  }
`;

const Home = () => {
  const { data, loading } = useQuery(QUERY);
  if (loading) return null;
  console.log(data);
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  );
};

export default withApollo(Home);
