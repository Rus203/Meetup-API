import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export class NotUniqueError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotUniqueError'
    this.status = StatusCodes.NOT_ACCEPTABLE
    this.reason = ReasonPhrases.NOT_ACCEPTABLE
  }
}