import { StatusCodes } from 'http-status-codes';

const errorHandleMiddleware = (error, request, response, next) => {
  // console.log(
  //   `error.name - ${error.name}\nerror.message - ${error.message}\nerror.stack - ${error.stack}`
  // );
  const err = {
    name: error.name,
    message: error.message,
  };
  response.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).send(err);
};

export default errorHandleMiddleware;
