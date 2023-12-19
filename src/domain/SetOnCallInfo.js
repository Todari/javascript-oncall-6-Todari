import REGEXP from '../constant/RegExp.js';
import SETTING from '../constant/Setting.js';
import WEEK from '../constant/Week.js';
import CreateOnCall from './CreateOnCall.js';
import { MonthAndWeekTypeError, OrderTypeError } from '../error/CustomError.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class SetOnCallInfo {
  async read() {
    const monthWeekArray = await this.#readMonthAndWeek();
    const { weekdayOrderArray, weekendOrderArray } = await this.#readOrders();
    const createOnCall = new CreateOnCall(monthWeekArray.month, monthWeekArray.week, weekdayOrderArray, weekendOrderArray);
  }

  async #readMonthAndWeek() {
    while (true) {
      const inputString = await InputView.readMonthAndWeek();
      try {
        this.#validateMonthAndWeek(inputString);
        return {
          month: inputString.split(',')[0],
          week: inputString.split(',')[1],
        };
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  #validateMonthAndWeek(inputString) {
    const [month, week] = inputString.split(',');
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
      ((weekdayArray.length < SETTING.minimumCrewNumber || weekdayArray.length > SETTING.maximumCrewNumber) || (weekendArray.length < SETTING.minimumCrewNumber || weekendArray.length > SETTING.maximumCrewNumber))
    ) {
      throw new OrderTypeError();
    }
  }
}

export default SetOnCallInfo;
