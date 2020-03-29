import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true
  }
});

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  events: [eventsSchema]
});

export default mongoose.models.habits || mongoose.model("habits", habitSchema);
