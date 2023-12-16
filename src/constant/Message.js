const MESSAGE = Object.freeze({
  readMonthAndWeek: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  readWeekdayOrder: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  readWeekendOrder: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',

  printOnCallDate: (month, date, week, worker) =>
    `${month}월 ${date}일 ${week} ${worker}`,
  holiday: '(휴일)',
});

export default MESSAGE;
