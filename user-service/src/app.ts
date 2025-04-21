import express, { Application } from 'express';  // Import Express framework and Application type
import userRoutes from './routes/user.routes';   // Import user-related routes

/**
 * Initialize the Express application.
 * 
 * This sets up middleware and mounts routes for user operations
 * under the /api/users path.
 */
const app: Application = express();

// Built-in middleware to parse incoming JSON payloads.
// It populates req.body with the parsed JSON.
app.use(express.json());

/**
 * Mount the userRoutes router on the /api/users path.
 * 
 * Routes defined in userRoutes:
 *  - POST /register    -> register a new user
 *  - POST /login       -> authenticate an existing user
 */
app.use('/api/users', userRoutes);

// Export the configured Express app instance.
// The server entry point (index.ts) will import this and start listening.
export default app;
