import mongoose from "mongoose";

const connectToDatabase = async (): Promise<void> => {
  const mongoUri = process.env.DB_URL;
  console.log(mongoUri);


  if (!mongoUri) {
    console.error("MONGO_URI is not defined in .env");
    throw new Error("MONGO_URI is not defined");
  }

  try {
    await mongoose.connect(mongoUri)
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log("MongoDB Error ", err));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error connecting to MongoDB: ${errorMessage}`);
    throw error;
  }
};

export default connectToDatabase;
