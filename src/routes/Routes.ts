import express, {Router} from 'express';
import { router as userRoutes } from './User.Router';

const router: Router = express.Router();

router.use('/users', userRoutes);

export { router };
