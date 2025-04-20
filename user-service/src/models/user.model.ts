import mongoose, { Document, Schema, Model } from 'mongoose';

// 1. Define an interface for the User document
export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: 'student' | 'instructor' | 'admin';
}

// 2. Define the schema
const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }, // ✅ now explicitly required
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' }
}, { timestamps: true });

// 3. Export a strongly-typed model
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
