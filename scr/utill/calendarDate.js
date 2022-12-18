export class CalendarDate {
  constructor() {
    this.date = new Date();
  }

  // 연도
  get currentYear() {
    return this.date.getFullYear();
  }

  // 월
  get currentMonth() {
    return this.date.getMonth() + 1;
  }

  // 일
  get today() {
    return this.date.getDate();
  }

  // 월의 마지막 일
  getMonthLastDate(year, month, day) {
    return new Date(year, month, day).getDate();
  }

  // 월의 시작 요일에 대한 정수값
  getMonthFistDayOfWeek = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  countCureentWeek(year, month) {
    return Math.ceil(
      (getMonthFistDayOfWeek(year) + this.getMonthLastDate(year, month)) / 7
    );
  }
}
