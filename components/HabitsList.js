import Habit from "./Habit";

export default function HabitsList({ habits }) {
  return (
    <section className="habitsList container">
      {habits.map(_habit => (
        <Habit key={_habit} habit={_habit} />
      ))}
      <style jsx>{`
        .habitsList {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 10px;
        }
        @media only screen and (max-width: 1024px) {
          .habitsList {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media only screen and (max-width: 768px) {
          .habitsList {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media only screen and (max-width: 520px) {
          .habitsList {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
