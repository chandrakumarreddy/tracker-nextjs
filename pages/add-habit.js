import HabitsForm from "../components/HabitsForm";

export default function addHabit() {
  return (
    <section className="addHabit container flex-center flex-column">
      <h1>Add New Habit</h1>
      <HabitsForm />
    </section>
  );
}
