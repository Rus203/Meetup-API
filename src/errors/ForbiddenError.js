import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export default class ForbiddenError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ForbiddenError'
    this.status = StatusCodes.FORBIDDEN
    this.reason = ReasonPhrases.FORBIDDEN
  }
}
