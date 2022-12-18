import { useState } from "react";
import styled from "styled-components/native";
import MonthSelector from "../calendar/MonthSelector";
import WeeksHeader from "../calendar/WeeksHeader";
import Days from "../calendar/Days";
import { CalendarDate } from "../../utill/calendarDate";
export const Calendar = () => {
  const calendarDate = new CalendarDate();
  const [selectDay, setSelectDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(
    calendarDate.currentMonth - 1
  );
  const [currentYear, setCurrentYear] = useState(calendarDate.currentYear);

  const moveNextMonth = () => {
    if (isLastMonth(currentMonth)) {
      moveNextYearFirstMonth(currentYear);
    } else {
      const nextMonth = currentMonth + 1;
      setCurrentMonth(nextMonth);
    }
    setSelectDay(null);
  };
  const movePrevMonth = () => {
    if (isFirstMonth(currentMonth)) {
      movePrevYearLastMonth(currentYear);
    } else {
      const prevMonth = currentMonth - 1;
      setCurrentMonth(prevMonth);
      setSelectDay(null);
    }
  };

  const movePrevYearLastMonth = (currentYear) => {
    setCurrentMonth(11);
    setCurrentYear(currentYear - 1);
  };
  const moveNextYearFirstMonth = (currentYear) => {
    setCurrentMonth(0);
    setCurrentYear(currentYear + 1);
  };

  const isFirstMonth = (month) => {
    return month < 1;
  };
  const isLastMonth = (month) => {
    return month > 10;
  };
  return (
    <CalendarContainer>
      <MonthSelector
        moveNextMonth={moveNextMonth}
        movePrevMonth={movePrevMonth}
        currentMonth={currentMonth}
        currentYear={currentYear}
      />
      <WeeksHeader />
      <Days
        currentMonth={currentMonth}
        currentYear={currentYear}
        selectDay={selectDay}
        setSelectDay={setSelectDay}
      />
    </CalendarContainer>
  );
};
const CalendarContainer = styled.View`
  background-color: white;
  flex: 1;
  justify-content: start;
  align-items: center;
`;

export default Calendar;
