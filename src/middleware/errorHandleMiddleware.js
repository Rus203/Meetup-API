import { ReasonPhrases, StatusCodes } from "http-status-codes"

export const errorHandleMiddleware = (error, request, response, next) => {
  if(!error.status) {
    const err = {
      name: 'commonError',
      message: error.name,
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