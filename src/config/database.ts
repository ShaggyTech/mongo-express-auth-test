import mongoose from "mongoose";

const connectMongoDB = async (mongoURI: string) => {
  const conn = await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

  console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  return conn;
};

export { connectMongoDB };
