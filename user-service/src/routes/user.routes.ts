import express from 'express';  // Import express module
import { register, login } from '../controllers/user.controller';  // Import the controller functions for registration and login

// Create a new Express router instance to define user routes
const router = express.Router();

/**
 * @route   POST /api/users/register
 * @desc    Register a new user
 * @access  Public
 * 
 * The request body should contain:
 *   - name: string (The full name of the user)
 *   - email: string (The email address of the user)
 *   - password: string (The password of the user, to be hashed before storing)
 * 
 * On successful registration, the newly created user object (excluding the password hash) is returned.
 */
router.post('/register', register);

/**
 * @route   POST /api/users/login
 * @desc    Authenticate a user and initiate a session (usually with a token)
 * @access  Public
 * 
 * The request body should contain:
 *   - email: string (The email address used for login)
 *   - password: string (The user's password)
 * 
 * On successful login, returns the authenticated user object (including token if implemented).
 */
router.post('/login', login);

// Export the router to be used in the main application (e.g., mounted at /api/users)
export default router;
