import express, { Application } from 'express';
import dotenv from 'dotenv';
import { router as apiRoutes } from './routes/index';
import { errorMiddleware } from './middlewares/error.middleware';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Error Middleware
app.use(errorMiddleware);

export default app;
