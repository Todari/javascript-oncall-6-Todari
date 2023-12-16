import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';
import WEEK from '../constant/Week.js';

class OutputView {
  static printErrorMessage(error) {
    Console.print(error.message);
  }

  static printOnCallDate(month, date, week, isHolyday, worker) {
    let weekInfo = WEEK[week];
    if ((week !== 'saturday' && week !== 'sunday') && isHolyday === true) {
      weekInfo += '(휴일)';
    }
    Console.print(MESSAGE.printOnCallDate(month, date, weekInfo, worker));
  }
}

export default OutputView;
