import { StatusCodes } from 'http-status-codes';

export default class BadValueError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadValueError';
    this.status = StatusCodes.BAD_REQUEST;
  }
}
