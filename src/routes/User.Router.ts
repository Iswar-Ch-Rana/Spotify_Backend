import express from 'express';
import { UserController } from '../controllers/User.Controller';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.patch('/:id', userController.partialUpdateUser);
router.delete('/:id', userController.deleteUser);

export { router };
