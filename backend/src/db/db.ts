import { connect } from "mongoose";

async function connectDB(uri: string) {
  try {
    await connect(uri);
    console.log("Database Connected.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;
