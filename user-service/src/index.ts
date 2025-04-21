import app from './app';  // Import the Express app instance
import { connectToDB } from './config';  // Import the MongoDB connection function

// Define the port to run the server on, defaults to 3000 if not specified in environment variables
const PORT = process.env.PORT || 3000;

/**
 * Establish the connection to the MongoDB database and then start the server.
 * 
 * 1. Connect to the MongoDB database using the `connectToDB` function.
 * 2. Once the connection is successful, the server will start listening on the specified port.
 */
connectToDB().then(() => {
  // Start the Express server and log a message once it's running
  app.listen(PORT, () => {
    console.log(`User service is running on port ${PORT}`);
  });
});
