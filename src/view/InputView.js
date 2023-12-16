import MESSAGE from "../constant/Message.js";
import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readMonthAndWeek() {
    return await Console.readLineAsync(MESSAGE.readMonthAndWeek);
  }

  static async readWeekdayOrder() {
    return await Console.readLineAsync(MESSAGE.readWeekdayOrder);
  }
}

export default InputView;
