import User from '../models/user.model';
import { hashPassword, comparePasswords } from '../utils/hash';

export const registerUser = async (name: string, email: string, password: string) => {
    const passwordHash = await hashPassword(password); // must return string

    // Ensure hashPassword only returns string
    if (!passwordHash) {
        throw new Error('Failed to hash password');
    }

    const newUser = new User({ name, email, passwordHash });
    return await newUser.save();
};

export const authenticateUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await comparePasswords(password, user.passwordHash);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    return user;
};
