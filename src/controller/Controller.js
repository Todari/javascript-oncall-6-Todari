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
    const weekdayArray = await this.#readWeekdayOrder();
    const weekendArray = await this.#readWeekendOrder();
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

  async #readWeekdayOrder() {
    while (true) {
      const inputString = await InputView.readWeekdayOrder();
      try {
        this.#validateOrder(inputString);
        return inputString.split(',');
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  async #readWeekendOrder() {
    while (true) {
      const inputString = await InputView.readWeekendOrder();
      try {
        this.#validateOrder(inputString);
        return inputString.split(',');
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  #validateOrder(inputString) {
    if (!REGEXP.order.test(inputString)) {
      throw new OrderTypeError();
    }
  }
}

export default Controller;
