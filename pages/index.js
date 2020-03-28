import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Head from "next/head";
import { withApollo } from "../lib/apollo";
import HabitsList from "../components/HabitsList";

const QUERY = gql`
  query {
    sayHello
  }
`;

const Home = () => {
  const { data } = useQuery(QUERY);
  const [habits, setHabits] = React.useState([
    "sleep well",
    "Good day",
    "Have Fun",
    "Eaatwell",
    "Go to Gym"
  ]);
  return (
    <section className="home">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="home__title">Track your Habits here</h1>
      <HabitsList habits={habits} />
      <style jsx>{`
        .home__title {
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default withApollo(Home);
