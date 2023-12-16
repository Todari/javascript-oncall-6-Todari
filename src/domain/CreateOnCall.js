import SETTING from "../constant/Setting.js";
import WEEK from "../constant/Week.js";
import OncallDate from "../model/OncallDate.js";

class CreateOnCall {
  #month;
  #firstWeek;
  #weekdayArray;
  #weekendArray;

  constructor(month, firstWeek, weekdayArray, weekendArray) {
    this.#month = month;
    this.#firstWeek = firstWeek;
    this.#weekdayArray = weekdayArray;
    this.#weekendArray = weekendArray;
    this.setDates();
  }

  setDates() {
    let weekCounter = 0;
    Object.keys(WEEK).forEach(key => {
      if (WEEK[key] === this.#firstWeek) {
        weekCounter = Object.keys(WEEK).indexOf(key);
      }
    });
    for (let i = 1; i < SETTING.days[this.#month] + 1; i += 1) {
      new OncallDate(this.#month, i, Object.keys(WEEK)[weekCounter]);
      weekCounter += 1;
      if (weekCounter === 6) {
        weekCounter = 0;
      }
    }
  }
}

export default CreateOnCall;
