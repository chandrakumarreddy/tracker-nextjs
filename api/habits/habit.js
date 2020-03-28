import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.models.habits || mongoose.model("habits", habitSchema);
