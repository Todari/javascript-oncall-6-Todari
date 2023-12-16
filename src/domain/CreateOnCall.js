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
    this.setDates();
    this.#calender.forEach(el => {
      el.get();
    });
  }

  setDates() {
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
}

export default CreateOnCall;
