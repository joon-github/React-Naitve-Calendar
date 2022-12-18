import React from "react";
import styled from "styled-components/native";
import { CalendarDate } from "../../utill/calendarDate";
import Day from "./Day";

const Days = ({ currentYear, currentMonth, selectDay, setSelectDay }) => {
  const calendarDate = new CalendarDate();
  const prevMonthLastDate = calendarDate.getMonthLastDate(
    currentYear,
    currentMonth,
    0
  );
  const crrentMonsthLastDate = calendarDate.getMonthLastDate(
    currentYear,
    currentMonth + 1,
    0
  );

  const monthFistDayOfWeek = calendarDate.getMonthFistDayOfWeek(
    currentYear,
    currentMonth
  );
  const printDays = () => {
    const days = [];
    for (let i = 0; i < 42; i++) {
      let day = 0;
      let isCurrMonthDay = false;
      if (i < monthFistDayOfWeek) {
        day = prevMonthLastDate - monthFistDayOfWeek + i + 1;
      } else if (
        i >= monthFistDayOfWeek &&
        i < crrentMonsthLastDate + monthFistDayOfWeek
      ) {
        day = i + 1 - monthFistDayOfWeek;
        isCurrMonthDay = true;
      } else {
        day = i - crrentMonsthLastDate - monthFistDayOfWeek + 1;
      }

      days.push(
        <Day
          key={i}
          day={day}
          isCurrMonthDay={isCurrMonthDay}
          idx={i}
          selectDay={selectDay}
          setSelectDay={setSelectDay}
        />
      );
    }
    return days;
  };

  return <DaysContainer>{printDays()}</DaysContainer>;
};
const DaysContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
export default Days;
