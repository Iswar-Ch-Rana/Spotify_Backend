export const successResponse = (
  message: string,
  status: number,
  responseData: any = null
) => {
  return {
    error: false,
    status,
    message,
    responseData,
  };
};

export const errorResponse = (
  message: string,
  status: number,
  responseData: any = null
) => {
  return {
    error: true,
    status,
    message,
    responseData,
  };
};
