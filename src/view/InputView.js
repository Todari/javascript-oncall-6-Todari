import MESSAGE from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async readMonthAndWeek() {
    return await Console.readLineAsync(MESSAGE.readMonthAndWeek);
  }

  static async readWeekdayOrder() {
    return await Console.readLineAsync(MESSAGE.readWeekdayOrder);
  }

  static async readWeekendOrder() {
    return await Console.readLineAsync(MESSAGE.readWeekendOrder);
  }
}

export default InputView;
