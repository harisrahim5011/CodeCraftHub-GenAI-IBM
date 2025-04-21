import mongoose, { Document, Schema, Model } from 'mongoose';


// 1. Define an interface representing a User document in MongoDB.
//    Extends mongoose.Document to include built‑in document properties.
export interface IUser extends Document {
  /** Full name of the user */
  name: string;
  /** Unique email address for login and communication */
  email: string;
  /** Hashed password (never store plain text!) */
  passwordHash: string;
  /** Role determines permissions: student, instructor, or admin */
  role: 'student' | 'instructor' | 'admin';
}


// 2. Create a schema corresponding to the document interface.
//    The second argument `{ timestamps: true }` automatically adds
//    `createdAt` and `updatedAt` fields.
const userSchema: Schema<IUser> = new Schema({
  /** User’s full name (required) */
  name: { 
    type: String, 
    required: true 
  },
  /** Email must be unique and is required for login */
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  /** Stored hashed password (bcrypt/etc.) */
  passwordHash: { 
    type: String, 
    required: true 
  },
  /** Role-based access control */
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'], 
    default: 'student'
  }
}, { 
  timestamps: true 
});


// 3. Create and export the Mongoose model.
//    This gives us a strongly‑typed Model<IUser> for all CRUD operations.
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
