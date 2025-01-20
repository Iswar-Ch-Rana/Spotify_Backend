// // src/controllers/UserController.ts
// import { Request, Response } from 'express';
// import { UserService } from '../services/User.Service';
// import { successResponse, errorResponse } from '../utils/apiResponse';
// import mongoose from "mongoose";
//
// export class UserController {
//   // Validate ObjectId
//   private validateObjectId (id: string, res: Response): boolean {
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       res.status(400).json(errorResponse('Invalid user ID format', 400));
//       return false;
//     }
//     return true;
//   }
//
//   // Fetch all users
//   async getAllUsers(req: Request, res: Response): Promise<void> {
//     try {
//       const users = await UserService.getAllUsers();
//       res.status(200).json(successResponse("Users fetched successfully", 200, users));
//     } catch (error: any) {
//       res.status(500).json(errorResponse(error.message, 500));
//     }
//   }
//
//   // Fetch a user by ID
//   async getUserById(req: Request, res: Response): Promise<void> {
//     const { id } = req.params;
//     if (!this.validateObjectId(id, res)) return;
//
//     try {
//       const user = await UserService.getUserById(id);
//       if (!user) {
//         res.status(404).json(errorResponse("User not found", 404));
//       } else {
//         res.status(200).json(successResponse("User fetched successfully", 200, user));
//       }
//     } catch (error: any) {
//       res.status(500).json(errorResponse(error.message, 500));
//     }
//   }
//
//   // Create a new user
//   async createUser(req: Request, res: Response): Promise<void> {
//     const { firstName, lastName, email, phoneNumber, profilePicture, password } = req.body;
//
//     if (!firstName || !email || !password) {
//       res.status(400).json(errorResponse("Missing required fields: firstName, email, password", 400));
//       return;
//     }
//
//     try {
//       const user = await UserService.createUser({
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         profilePicture,
//         password,
//       });
//       res.status(201).json(successResponse("User created successfully", 201, user));
//     } catch (error: any) {
//       res.status(400).json(errorResponse(error.message, 400));
//     }
//   }
//
//   // Update all fields of an existing user
//   async updateUser(req: Request, res: Response): Promise<void> {
//     const { id } = req.params;
//     if (!this.validateObjectId(id, res)) return;
//
//     const updateUser = req.body;
//
//     if (!updateUser.firstName || !updateUser.email || !updateUser.password) {
//       res.status(400).json(errorResponse("Missing required fields: firstName, email, password", 400));
//       return;
//     }
//
//     try {
//       const user = await UserService.updateUser(id, updateUser);
//       if (!user) {
//         res.status(404).json(errorResponse('User not found', 404));
//       } else {
//         res.status(200).json(successResponse('User updated successfully', 200, user));
//       }
//     } catch (error: any) {
//       res.status(500).json(errorResponse(error.message, 500));
//     }
//   }
//
//   // // Partial update an existing user
//   // async partialUpdateUser(req: Request, res: Response): Promise<void> {
//   //   const { id } = req.params;
//   //   if (!this.validateObjectId(id, res)) return;
//   //
//   //   const updateUser = req.body;
//   //
//   //   try {
//   //     const user = await UserService.updateUser(id, updateUser);
//   //     if (!user) {
//   //       res.status(404).json(errorResponse('User not found', 404));
//   //     } else {
//   //       res.status(200).json(successResponse('User partially updated successfully', 200, user));
//   //     }
//   //   } catch (error: any) {
//   //     res.status(500).json(errorResponse(error.message, 500));
//   //   }
//   // }
//
//   // Delete a user
//   async deleteUser(req: Request, res: Response): Promise<void> {
//     const { id } = req.params;
//     if (!this.validateObjectId(id, res)) return;
//
//     try {
//       const user = await UserService.deleteUser(id);
//       if (!user) {
//         res.status(404).json(errorResponse('User not found', 404));
//       } else {
//         res.status(200).json(successResponse('User deleted successfully', 200, user));
//       }
//     } catch (error: any) {
//       res.status(500).json(errorResponse(error.message, 500));
//     }
//   }
// }

// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/User.Service';
import { successResponse, errorResponse } from '../utils/apiResponse';
import mongoose from "mongoose";

export class UserController {
  // Validate ObjectId
  private validateObjectId = (id: string, res: Response): boolean => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json(errorResponse('Invalid user ID format', 400));
      return false;
    }
    return true;
  }

  // Fetch all users
  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(successResponse("Users fetched successfully", 200, users));
    } catch (error: any) {
      res.status(500).json(errorResponse(error.message, 500));
    }
  }

  // Fetch a user by ID
  getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if (!this.validateObjectId(id, res)) return;

    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        res.status(404).json(errorResponse("User not found", 404));
      } else {
        res.status(200).json(successResponse("User fetched successfully", 200, user));
      }
    } catch (error: any) {
      res.status(500).json(errorResponse(error.message, 500));
    }
  }

  // Create a new user
  createUser = async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, email, phoneNumber, profilePicture, password } = req.body;

    if (!firstName || !email || !password) {
      res.status(400).json(errorResponse("Missing required fields: firstName, email, password", 400));
      return;
    }

    try {
      const user = await UserService.createUser({
        firstName,
        lastName,
        email,
        phoneNumber,
        profilePicture,
        password,
      });
      res.status(201).json(successResponse("User created successfully", 201, user));
    } catch (error: any) {
      res.status(400).json(errorResponse(error.message, 400));
    }
  }

  // Update all fields of an existing user
  updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if (!this.validateObjectId(id, res)) return;

    const updateUser = req.body;

    if (!updateUser.firstName || !updateUser.email || !updateUser.password) {
      res.status(400).json(errorResponse("Missing required fields: firstName, email, password", 400));
      return;
    }

    try {
      const user = await UserService.updateUser(id, updateUser);
      if (!user) {
        res.status(404).json(errorResponse('User not found', 404));
      } else {
        res.status(200).json(successResponse('User updated successfully', 200, user));
      }
    } catch (error: any) {
      res.status(500).json(errorResponse(error.message, 500));
    }
  }

  // Partial update an existing user
  partialUpdateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if (!this.validateObjectId(id, res)) return;

    const updateUser = req.body;

    try {
      const user = await UserService.updateUser(id, updateUser);
      if (!user) {
        res.status(404).json(errorResponse('User not found', 404));
      } else {
        res.status(200).json(successResponse('User partially updated successfully', 200, user));
      }
    } catch (error: any) {
      res.status(500).json(errorResponse(error.message, 500));
    }
  }


  // Delete a user
  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if (!this.validateObjectId(id, res)) return;

    try {
      const user = await UserService.deleteUser(id);
      if (!user) {
        res.status(404).json(errorResponse('User not found', 404));
      } else {
        res.status(200).json(successResponse('User deleted successfully', 200, user));
      }
    } catch (error: any) {
      res.status(500).json(errorResponse(error.message, 500));
    }
  }
}
