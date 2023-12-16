import WEEK from '../constant/Week.js';
import SETTING from '../constant/Setting.js';
import OnCallDate from '../model/OnCallDate.js';

class Calender {
  #dates;

  constructor(firstWeek, month) {
    this.#dates = [];
    let weekCounter = 0;
    Object.keys(WEEK).forEach(key => {
      if (WEEK[key] === firstWeek) {
        weekCounter = Object.keys(WEEK).indexOf(key);
      }
    });
    for (let i = 1; i < SETTING.days[month] + 1; i += 1) {
      this.#dates.push(new OnCallDate(month, i, Object.keys(WEEK)[weekCounter]));
      weekCounter += 1;
      if (weekCounter === 7) { weekCounter = 0; }
    }
  }

  getDates() {
    return this.#dates;
  }
}

export default Calender;
