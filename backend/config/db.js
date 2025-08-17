import mongoose from "mongoose";

const connect = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    await mongoose.connect(MONGO_URL);
    console.log("mongodb Connected");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

export default connect;
