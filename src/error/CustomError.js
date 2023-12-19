import ERROR from '../constant/Error.js';

export class MonthAndWeekTypeError extends Error {
  constructor() {
    super(ERROR.monthAndWeekType);
  }
}
export class OrderTypeError extends Error {
  constructor() {
    super(ERROR.orderType);
  }
}
