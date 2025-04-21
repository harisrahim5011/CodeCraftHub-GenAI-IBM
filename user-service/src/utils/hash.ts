import bcrypt from 'bcrypt';  // Import bcrypt module for password hashing and comparison

/**
 * Hashes a plain-text password using bcrypt.
 * 
 * This function uses bcrypt's hashing algorithm to securely hash the user's password.
 * A salt (a random value) is generated automatically to make the hash more secure.
 * 
 * @param password - The plain-text password to hash.
 * @returns        - A promise that resolves to the hashed password.
 * @throws          - bcrypt.hash() may throw an error if hashing fails (e.g., due to system limitations).
 */
export const hashPassword = async (password: string) => {
  // Generate a secure hash of the password using bcrypt with a salt rounds of 10
  return await bcrypt.hash(password, 10);
};

/**
 * Compares a plain-text password with a hashed password.
 * 
 * This function compares the plain-text password provided by the user with the hashed password
 * stored in the database to verify if the credentials are correct.
 * 
 * @param password - The plain-text password to compare.
 * @param hash     - The hashed password stored in the database.
 * @returns        - A promise that resolves to a boolean: true if the passwords match, false otherwise.
 * @throws          - bcrypt.compare() may throw an error if comparison fails (e.g., invalid hash format).
 */
export const comparePasswords = async (password: string, hash: string) => {
  // Compare the plain-text password with the stored hashed password
  return await bcrypt.compare(password, hash);
};
