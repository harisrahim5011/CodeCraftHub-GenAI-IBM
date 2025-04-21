import User from '../models/user.model';  
import { hashPassword, comparePasswords } from '../utils/hash';  

/**
 * Registers a new user.
 * 
 * 1. Hashes the plain-text password.
 * 2. Creates and saves a new User document in MongoDB.
 * 
 * @param name      - The full name of the user.
 * @param email     - The unique email address of the user.
 * @param password  - The plain-text password to hash and store.
 * @returns         - The saved User document.
 * @throws          - Error if password hashing fails or saving to DB fails.
 */
export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  // Hash the plain-text password before storing
  const passwordHash = await hashPassword(password);
  if (!passwordHash) {
    // Safety check: ensure hashPassword returned a valid string
    throw new Error('Failed to hash password');
  }

  // Build a new User instance
  const newUser = new User({ name, email, passwordHash });

  // Save the user to MongoDB and return the persisted document
  return await newUser.save();
};

/**
 * Authenticates an existing user.
 * 
 * 1. Looks up the user by email.
 * 2. Compares the provided password to the stored hash.
 * 
 * @param email     - The email address to look up.
 * @param password  - The plain-text password to verify.
 * @returns         - The authenticated User document if valid.
 * @throws          - Error if user not found or credentials invalid.
 */
export const authenticateUser = async (
  email: string,
  password: string
) => {
  // Find the user in the database by their email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  // Compare provided password against stored hash
  const isMatch = await comparePasswords(password, user.passwordHash);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Return the user document on successful authentication
  return user;
};
