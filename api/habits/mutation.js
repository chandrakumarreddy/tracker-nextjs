import HabitModel from "./habit";

export default {
  Mutation: {
    async addHabit(_, { input }) {
      try {
        return await HabitModel.create({ ...input });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
