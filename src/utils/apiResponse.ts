const successResponse = (
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

const errorResponse = (
  message: string = "Internal server error",
  status: number = 500,
  responseData: any = null
) => {
  return {
    error: true,
    status,
    message,
    responseData,
  };
};

export { successResponse, errorResponse };
