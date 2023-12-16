import MESSAGE from "../constant/Message.js";
import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readMonthAndWeek() {
    return await Console.readLineAsync(MESSAGE.readMonthAndWeek);
  }
}

export default InputView;
