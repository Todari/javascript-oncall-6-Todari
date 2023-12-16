import SETTING from "../constant/Setting.js";
import WEEK from "../constant/Week.js";
import OncallDate from "../model/OncallDate.js";

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
    this.#calender = [];
    this.#setDates();

    this.setWorker();

    this.#calender.forEach(el => {
      el.print();
    })
  }

  #setDates() {
    let weekCounter = 0;
    Object.keys(WEEK).forEach(key => {
      if (WEEK[key] === this.#firstWeek) {
        weekCounter = Object.keys(WEEK).indexOf(key);
      }
    });
    for (let i = 1; i < SETTING.days[this.#month] + 1; i += 1) {
      this.#calender.push(new OncallDate(this.#month, i, Object.keys(WEEK)[weekCounter]));
      weekCounter += 1;
      if (weekCounter === 7) {
        weekCounter = 0;
      }
    }
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

  setWorker() {
    let prevWorker = '';
    let { weekdayRemain, weekendRemain } = this.#workerRotation();
    this.#calender.forEach(date => {
      if (date.isHoliday()) {
        if (prevWorker === weekendRemain[0]) {
          weekendRemain = this.#switchRotation(weekendRemain);
        }
        date.setWorker(prevWorker = weekendRemain.shift())
      } else {
        if (prevWorker === weekdayRemain[0]) {
          weekdayRemain = this.#switchRotation(weekdayRemain);
        }
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
}

export default CreateOnCall;
