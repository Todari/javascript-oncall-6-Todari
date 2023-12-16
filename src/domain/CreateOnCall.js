import SETTING from '../constant/Setting.js';
import WEEK from '../constant/Week.js';
import OnCallDate from '../model/OnCallDate.js';
import OutputView from '../view/OutputView.js';
import Calender from './Calender.js';

class CreateOnCall {
  #month;
  #firstWeek;
  #weekdayArray;
  #weekendArray;
  #calender;

  constructor(month, firstWeek, weekdayArray, weekendArray) {
    this.#month = month;
    this.#firstWeek = firstWeek;
    this.#weekdayArray = weekdayArray;
    this.#weekendArray = weekendArray;
    this.#calender = new Calender(this.#firstWeek, this.#month);

    this.#setWorker();
    this.#printOnCall();
  }

  #workerRotation() {
    const weekdayRemain = [];
    const weekendRemain = [];
    while (weekdayRemain.length < 31) {
      weekdayRemain.push(...this.#weekdayArray);
      weekendRemain.push(...this.#weekendArray);
    }
    return { weekdayRemain, weekendRemain };
  }

  #setWorker() {
    let prevWorker = '';
    let { weekdayRemain, weekendRemain } = this.#workerRotation();
    this.#calender.getDates().forEach(date => {
      if (date.isHoliday()) {
        if (prevWorker === weekendRemain[0]) { weekendRemain = this.#switchRotation(weekendRemain); }
        date.setWorker(prevWorker = weekendRemain.shift())
      } else {
        if (prevWorker === weekdayRemain[0]) { weekdayRemain = this.#switchRotation(weekdayRemain); }
        date.setWorker(prevWorker = weekdayRemain.shift())
      }
    });
  }

  #switchRotation(array) {
    const temp = array[0];
    array[0] = array[1];
    array[1] = temp;
    return array;
  }

  #printOnCall() {
    OutputView.printNewLine();
    this.#calender.getDates().forEach(date => {
      date.print();
    });
  }
}

export default CreateOnCall;
