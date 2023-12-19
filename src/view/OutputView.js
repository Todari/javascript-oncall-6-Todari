import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';
import WEEK from '../constant/Week.js';

class OutputView {
  static printErrorMessage(error) {
    Console.print(error.message);
  }

  static printOnCallDate(month, date, week, isHolyday, worker) {
    let weekInfo = WEEK[week];
    if (week !== 'saturday' && week !== 'sunday' && isHolyday === true) {
      weekInfo += MESSAGE.holiday;
    }
    Console.print(MESSAGE.printOnCallDate(month, date, weekInfo, worker));
  }

  static printNewLine() {
    Console.print('');
  }
}

export default OutputView;
