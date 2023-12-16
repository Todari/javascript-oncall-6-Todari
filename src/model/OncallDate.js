import HOLIDAYS from "../constant/Holidays.js";
import WEEK from "../constant/Week.js";
import OutputView from "../view/OutputView.js";

class OnCallDate {
  #month;
  #date;
  #week;
  #isHoliday;
  #worker;

  constructor(month, date, week) {
    this.#month = +month;
    this.#date = date;
    this.#week = week;
    this.#isHoliday = false;
    this.setOrderType();
  }

  setOrderType() {
    if (this.#week === 'saturday' || this.#week === 'sunday') {
      this.#isHoliday = true;
    }
    if (HOLIDAYS[this.#month].includes(this.#date)) {
      this.#isHoliday = true;
    }
  }

  setWorker(worker) {
    this.#worker = worker;
  }

  getWorker() {
    return this.#worker;
  }

  isHoliday() {
    return this.#isHoliday;
  }

  print() {
    OutputView.printOnCallDate(this.#month, this.#date, this.#week, this.#isHoliday, this.#worker);
  }
}

export default OnCallDate;
