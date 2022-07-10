import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.status = StatusCodes.BAD_REQUEST
    this.reason = ReasonPhrases.BAD_REQUEST
  }
}
