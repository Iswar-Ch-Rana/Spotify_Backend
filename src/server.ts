import app from './index';
import connectToDatabase from './config/database';

const port = process.env.PORT || 3000;

(async () => {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.info(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
})();
