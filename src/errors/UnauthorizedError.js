import { StatusCodes } from 'http-status-codes';

export default class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.status = StatusCodes.UNAUTHORIZED;
  }
}
