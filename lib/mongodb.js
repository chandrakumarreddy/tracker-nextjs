import mongoose from "mongoose";

const connect = handler => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return handler(req, res);
};
const db = mongoose.connection;
db.once("open", () => {
  console.log(`connected to database`);
});

export default connect;
