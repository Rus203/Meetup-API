import { ReasonPhrases, StatusCodes } from "http-status-codes"

export const internalServerErrorMiddleware = (error, request, response, next) => {
  console.log(JSON.stringify(error, null, 2))
  console.log(error.name)
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