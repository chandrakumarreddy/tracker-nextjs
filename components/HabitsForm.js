import { withApollo } from "../lib/apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRouter } from "next/router";

const ADD_HABIT = gql`
  mutation($input: HabitInput) {
    addHabit(input: $input) {
      id
      name
    }
  }
`;

function HabitsForm() {
  const [habit, setHabit] = React.useState("");
  const [addhabit] = useMutation(ADD_HABIT);
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    await addhabit({ variables: { input: { name: habit } } });
    router.push("/");
  };
  const handleChange = e => setHabit(e.target.value);
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add habit"
          className="mb-1"
          value={habit}
          onChange={handleChange}
        />
        <button className="btn btn-block ">Submit</button>
      </form>
    </article>
  );
}

export default withApollo(HabitsForm);
