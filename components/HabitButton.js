export default function HabitButton({ date }) {
  const [completed, setCompleted] = React.useState(false);
  return (
    <span className="habitButton">
      {`${date.getMonth() + 1}/${date.getDate()}`}
      <button
        onClick={() => setCompleted(!completed)}
        className="habitButton__btn"
      >
        {completed ? "X" : "O"}
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
