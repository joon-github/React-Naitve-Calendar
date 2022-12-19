import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
const Day = ({ idx, day, isCurrMonthDay, selectDay, setSelectDay }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isCurrMonthDay) {
          setSelectDay(idx);
        }
      }}
    >
      <DayContainer>
        <DayCheck idx={idx} selectDay={selectDay}></DayCheck>
        <DayText isCurrMonthDay={isCurrMonthDay}>{day}</DayText>
      </DayContainer>
    </TouchableWithoutFeedback>
  );
};
const DayContainer = styled.View`
  width: 14.2%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const DayText = styled.Text`
  ${({ isCurrMonthDay }) => !isCurrMonthDay && "color : gray"}
`;
const DayCheck = styled.View`
  display: ${({ idx, selectDay }) => (idx === selectDay ? "flex" : "none")};
  position: absolute;
  height: 35px;
  width: 35px;
  border: 1px solid blue;
  border-radius: 50px;
`;
export default Day;
