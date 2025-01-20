import { User } from '../models/User.model';

export class UserService {
  // Fetch all users
  static async getAllUsers() {
    return User.find();
  }

  // Fetch a user by ID
  static async getUserById(id: string) {
    return User.findById(id);
  }

  // Create a new user
  static async createUser(userData: any) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("Email is already registered");
    }
    const user = new User(userData);
    return user.save();
  }

  // Update an existing user
  static async updateUser(id: string, updateData: any) {
    return User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }

  // Delete a user
  static async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  }
}
