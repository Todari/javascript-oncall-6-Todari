import HOLIDAYS from "../constant/Holidays.js";
import WEEK from "../constant/Week.js";

class OnCallDate {
  #month;
  #date;
  #week;
  #isWeekendOrder;

  constructor(month, date, week) {
    this.#month = +month;
    this.#date = date;
    this.#week = week;
    this.#isWeekendOrder = false;
    this.setOrderType();
  }

  setOrderType() {
    if (this.#week === 'saturday' || this.#week === 'sunday') {
      this.#isWeekendOrder = true;
    }
    if (HOLIDAYS[this.#month].includes(this.#date)) {
      this.#isWeekendOrder = true;
    }
  }

  get() {
  }
}

export default OnCallDate;
