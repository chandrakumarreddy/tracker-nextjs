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
      date.setHours(0, 0, 0, 0);
      return await HabitModel.findByIdAndUpdate(
        {
          _id: habitId,
          "events.date": {
            $ne: date
          }
        },
        { $addToSet: { events: { date } } },
        { upsert: true }
      );
    },
    async removeEvent(_, { habitId, eventId }) {
      return await HabitModel.findByIdAndUpdate(
        {
          _id: habitId
        },
        { $pull: { events: { _id: eventId } } },
        { upsert: true }
      );
    }
  }
};
