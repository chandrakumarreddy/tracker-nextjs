import HabitModel from "./habit";

export default {
  Mutation: {
    async addHabit(_, { input }) {
      try {
        return await HabitModel.create({ ...input });
      } catch (error) {
        console.log(error);
      }
    },
    async addEvent(_, { habitId, date }) {
      console.log("add event");
    },
    async removeEvent(_, { habitId, eventId }) {
      console.log("remove event");
    }
  }
};
