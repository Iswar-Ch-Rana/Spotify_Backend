// Function to get the local IP address
import os from 'os'; // To get local network interfaces

export const getLocalIp = (): string => {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    if (!interfaces) continue;

    for (const networkInterface of interfaces) {
      if (
        networkInterface.family === 'IPv4' &&
        !networkInterface.internal
      ) {
        return networkInterface.address;
      }
    }
  }
  return 'localhost';
};
