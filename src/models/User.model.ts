import mongoose, { Schema, Document } from "mongoose";

// Define the User Interface
interface IUser extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  profilePicture?: string;
  password: string;
  isActive: boolean;
  isAdmin: boolean;
}

// User Schema Definition
const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (email: string) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), // Simple email regex
        message: "Invalid email format",
      },
    },
    phoneNumber: {
      type: String,
      required: false,
      validate: {
        validator: (phone: string) => /^[0-9]{10}$/.test(phone), // Example: 10-digit phone number
        message: "Invalid phone number format",
      },
    },
    profilePicture: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    versionKey: false, // Disables the __v field
  }
);

// Create and Export the User Model
const User = mongoose.model<IUser>("User", userSchema);
export { User , IUser };
