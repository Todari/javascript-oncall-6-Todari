import REGEXP from "../constant/RegExp.js";
import WEEK from "../constant/Week.js";
import { MonthAndWeekTypeError, OrderTypeError } from "../error/CustomError.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class Controller {
  constructor() {
    this.start();
  }

  async start() {
    const monthWeekArray = await this.#readMonthAndWeek();
    const { weekdayArray, weekendArray } = await this.#readOrders();
  }

  async #readMonthAndWeek() {
    while (true) {
      const inputString = await InputView.readMonthAndWeek();
      try {
        this.#validateMonthAndWeek(inputString);
        return { month: inputString.split(',')[0], week: inputString.split(',')[1] };
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  #validateMonthAndWeek(inputString) {
    const [month, week] = inputString.split(',');;
    if (!REGEXP.monthAndWeek.test(inputString)) {
      throw new MonthAndWeekTypeError();
    }
    if (Number(month) < 1 || Number(month) > 12) {
      throw new MonthAndWeekTypeError();
    }
    const weekArray = Object.values(WEEK);
    if (!weekArray.includes(week)) {
      throw new MonthAndWeekTypeError();
    }
  }

  async #readOrders() {
    while (true) {
      const weekdayInputString = await InputView.readWeekdayOrder();
      const weekendInputString = await InputView.readWeekendOrder();
      try {
        this.#validateOrders(weekdayInputString, weekendInputString);
        return { weekdayOrderArray: weekdayInputString.split(','), weekendOrderArray: weekendInputString.split(',') }
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  #validateOrders(weekdayInputString, weekendInputString) {
    const weekdayArray = weekdayInputString.split(',');
    const weekendArray = weekendInputString.split(',');
    if (
      (!REGEXP.order.test(weekdayInputString) || !REGEXP.order.test(weekendInputString)) ||
      (new Set(weekdayArray).size !== weekdayArray.length || new Set(weekendArray).size !== weekendArray.length) ||
      (!weekdayArray.every(value => weekendArray.includes(value))) ||
      ((weekdayArray.length < 5 || weekdayArray.length > 35) || (weekendArray.length < 5 || weekendArray.length > 35))
    ) {
      throw new OrderTypeError();
    }
  }
}

export default Controller;
