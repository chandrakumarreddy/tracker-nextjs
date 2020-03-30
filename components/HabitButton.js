import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { GET_HABITS } from "../graphql/queries";

const ADD_EVENT = gql`
  mutation($habitId: ID!, $date: Date!) {
    addEvent(habitId: $habitId, date: $date) {
      id
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation($habitId: ID!, $eventId: ID!) {
    removeEvent(habitId: $habitId, eventId: $eventId) {
      id
    }
  }
`;

export default function HabitButton({ date, habit }) {
  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: [{ query: GET_HABITS }]
  });
  const [removeEvent] = useMutation(REMOVE_EVENT, {
    refetchQueries: [{ query: GET_HABITS }]
  });
  const found = habit.events.find(_event => {
    const newDate = new Date(_event.date);
    return newDate.getDate() === date.getDate();
  });
  const handleClick = () => {
    if (found) {
      removeEvent({ variables: { habitId: habit.id, eventId: found.id } });
    } else {
      addEvent({ variables: { habitId: habit.id, date: date } });
    }
  };
  return (
    <span className="habitButton">
      {`${date.getMonth() + 1}/${date.getDate()}`}
      <button onClick={handleClick} className="habitButton__btn">
        {found ? "X" : "o"}
      </button>
      <style jsx>{`
        .habitButton {
          display: flex;
          flex-direction: column;
        }
        .habitButton__btn {
          border: none;
          margin-top: 5px;
          padding: 5px;
          border-radius: 5px;
          cursor: pointer;
          outline: 0;
        }
        .habitButton__btn:active {
          outline: 0;
        }
      `}</style>
    </span>
  );
}
