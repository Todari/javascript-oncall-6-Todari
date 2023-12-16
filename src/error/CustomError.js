import ERROR from '../constant/Error.js';

export class MonthAndWeekTypeError extends Error {
  constructor() {
    super(ERROR.monthAndWeekType);
  }
}
