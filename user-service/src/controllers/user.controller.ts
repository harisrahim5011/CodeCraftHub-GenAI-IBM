import { Request, Response } from 'express';  // Importing Request and Response types from Express
import { registerUser, authenticateUser } from '../services/user.service';  // Importing service functions for user registration and authentication

/**
 * Handles the user registration process.
 * 
 * Expects the client to send a POST request with user details in the body:
 * - name
 * - email
 * - password
 * 
 * If registration is successful, a user object is returned with a 201 status.
 * If there is an error, the error message is sent with a 401 status.
 */
export const register = async (req: Request, res: Response) => {
    try {
        // Extracting user details (name, email, password) from the request body
        const { name, email, password } = req.body;

        // Calling the registerUser service to handle the logic of user registration
        const user = await registerUser(name, email, password);

        // Returning the created user with a 201 status code (Resource created)
        res.status(201).json(user);
    } catch (err) {
        // If an error occurs during registration, handle it
        if (err instanceof Error) {
            // Sending the error message with a 401 status code (Unauthorized)
            res.status(401).json({ error: err.message });  // ✅ Safe access to err.message
        } else {
            // For unexpected errors, return a generic error message
            res.status(401).json({ error: 'Unknown error' });
        }
    }
}

/**
 * Handles the user login process.
 * 
 * Expects the client to send a POST request with email and password in the body.
 * - email
 * - password
 * 
 * If authentication is successful, the user object is returned with a 200 status.
 * If there is an error, the error message is sent with a 401 status.
 */
export const login = async (req: Request, res: Response) => {
    try {
        // Extracting user credentials (email, password) from the request body
        const { email, password } = req.body;

        // Calling the authenticateUser service to handle user authentication
        const user = await authenticateUser(email, password);

        // Returning the authenticated user object with a 200 status code
        res.status(200).json(user);
    } catch (err) {
        // If an error occurs during login, handle it
        if (err instanceof Error) {
            // Sending the error message with a 401 status code
            res.status(401).json({ error: err.message });
        } else {
            // For unexpected errors, return a generic error message
            res.status(401).json({ error: 'Unknown error' });
        }
    }
}
