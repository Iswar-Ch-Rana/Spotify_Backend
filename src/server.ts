import app from './index';
import connectToDatabase from './config/database';
import { getLocalIp } from './utils/getLocalIP';

const port: string | 3000 = process.env.PORT || 3000;

(async () => {
  try {
    await connectToDatabase();

    app.listen(port, ():void => {
      console.info(`Server is running at http://localhost:${port}`);
      console.info(`Server is running at http://${getLocalIp()}:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
})();
