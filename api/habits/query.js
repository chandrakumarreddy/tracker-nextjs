import HabitModel from "./habit";

export default {
  Query: {
    async habits() {
      return HabitModel.find({});
    }
  }
};
