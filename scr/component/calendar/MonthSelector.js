import React from "react";
import styled from "styled-components/native";
import leftIcon from "../../assets/left-arrow.png";
import rightIcon from "../../assets/right-arrow.png";
import { TouchableOpacity } from "react-native";
const MonthSelector = ({
  moveNextMonth,
  movePrevMonth,
  currentMonth,
  currentYear,
}) => {
  const monthTextArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <MonthSelectorContainer>
      <TouchableOpacity onPress={movePrevMonth}>
        <MonthSelectorIcon source={leftIcon}></MonthSelectorIcon>
      </TouchableOpacity>
      <MonthSelectorTitle>{`${monthTextArr[currentMonth]} ${currentYear}`}</MonthSelectorTitle>
      <TouchableOpacity onPress={moveNextMonth}>
        <MonthSelectorIcon source={rightIcon}></MonthSelectorIcon>
      </TouchableOpacity>
    </MonthSelectorContainer>
  );
};
const MonthSelectorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  font-size: 24px;
`;
const MonthSelectorTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const MonthSelectorIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 20px;
`;
export default MonthSelector;
