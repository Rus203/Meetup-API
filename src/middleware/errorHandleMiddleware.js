import { ReasonPhrases, StatusCodes } from "http-status-codes"

export const errorHandleMiddleware = (error, request, response, next) => {
  if(!error.name) {
    const err = {
      name: 'commonError',
      message: 'Something was wrong',
      reason: ReasonPhrases.INTERNAL_SERVER_ERROR
    }
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
  } else {
    const err = {
      name: error.name,
      message: error.message,
      reason: error.reason
    }
    response.status(error.status).send(err)
  }
}