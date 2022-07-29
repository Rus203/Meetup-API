import { StatusCodes } from 'http-status-codes';

export default class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status = StatusCodes.NOT_FOUND;
  }
}
