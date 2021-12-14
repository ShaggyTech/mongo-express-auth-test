import mongoose from 'mongoose';

const connectMongoDB = async (mongoURI: string) => {
  console.log('Attempting mongoDB connection...');
  const conn = await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 2000,
    })
    .catch((err) => {
      console.error('Mongoose Connection Error:', err);
      process.exit(1);
    });

  console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  return conn;
};

export { connectMongoDB };
