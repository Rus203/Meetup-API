import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotFoundError'
    this.status = StatusCodes.NOT_FOUND
    this.reason = ReasonPhrases.NOT_FOUND
  }
}
