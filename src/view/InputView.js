import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';

class InputView {
  static async readMonthAndWeek() {
    const monthAndWeek = await Console.readLineAsync(MESSAGE.readMonthAndWeek);
    return monthAndWeek;
  }

  static async readWeekdayOrder() {
    const weekdayOrder = await Console.readLineAsync(MESSAGE.readWeekdayOrder);
    return weekdayOrder;
  }

  static async readWeekendOrder() {
    const weekendOrder = await Console.readLineAsync(MESSAGE.readWeekendOrder);
    return weekendOrder;
  }
}

export default InputView;
