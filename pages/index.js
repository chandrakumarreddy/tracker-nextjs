import { useQuery } from "@apollo/react-hooks";

import Head from "next/head";
import { withApollo } from "../lib/apollo";
import HabitsList from "../components/HabitsList";
import Loader from "../components/Loader";
import { GET_HABITS } from "../graphql/queries";

const Home = () => {
  const { data, loading } = useQuery(GET_HABITS);
  if (loading) return <Loader />;
  const { habits } = data;
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
