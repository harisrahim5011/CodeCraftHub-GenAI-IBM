// Import mongoose to interact with MongoDB
import mongoose from 'mongoose';

// Import dotenv to load environment variables from a .env file
import dotenv from 'dotenv';

// Load variables from .env into process.env
dotenv.config();

/**
 * Connects to MongoDB using Mongoose and logs the connection status.
 * 
 * The MongoDB URI should be stored in the environment variable MONGODB_URI.
 * If the connection fails, the application will log the error and exit.
 */
export const connectToDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI!);

    // If successful, log a confirmation message
    console.log('MongoDB connected');
  } catch (err) {
    // If there's an error during connection, log it
    console.error('MongoDB connection error:', err);

    // Exit the process with failure (non-zero status code)
    process.exit(1);
  }
};
