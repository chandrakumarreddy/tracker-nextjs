import HabitButton from "./HabitButton";

export default function Habit({ habit }) {
  const dates = getLast5Days();
  return (
    <article className="habit">
      <h1>{habit}</h1>
      <div className="habit__dates">
        {dates.map(_date => (
          <HabitButton key={_date.getTime()} date={_date} />
        ))}
      </div>
      <style jsx>
        {`
          .habit {
            padding: 10px;
            border-radius: 10px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
          }
          .habit {
            display: flex;
            flex-direction: column;
          }
          .habit__dates {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        `}
      </style>
    </article>
  );
}

function getLast5Days() {
  return "01234".split("").map(_day => {
    let tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - _day);
    return tempDate;
  });
}
