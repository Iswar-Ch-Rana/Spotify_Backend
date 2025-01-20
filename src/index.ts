import express, { Application } from 'express';
import dotenv from 'dotenv';
import { router as apiRoutes } from './routes/Routes';
import { errorMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Error Middleware
app.use(errorMiddleware);

export default app;
