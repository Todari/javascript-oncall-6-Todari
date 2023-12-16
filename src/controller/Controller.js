import REGEXP from "../constant/RegExp.js";
import { MonthAndWeekTypeError } from "../error/CustomError.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class Controller {
  constructor() {
    this.readMonthAndWeek();
  }

  async readMonthAndWeek() {
    while (true) {
      const inputString = await InputView.readMonthAndWeek();
      try {
        this.#validateMonthAndWeek(inputString);
        return inputString;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  #validateMonthAndWeek(inputString) {
    if (!REGEXP.monthAndWeek.test(inputString)) {
      throw new MonthAndWeekTypeError();
    }
  }
}

export default Controller;
