import React from "react";
import styled from "styled-components/native";

const WeeksHeader = () => {
  const weeks = ["Sun", "Mon", "Tue", "Wnd", "Thu", "Fri", "Sat"];

  return (
    <WeeksHeadContainer>
      {weeks.map((week, idx) => (
        <WeeksHeadText
          key={idx}
          color={idx === 0 ? "red" : idx === 6 && "blue"}
        >
          {week}
        </WeeksHeadText>
      ))}
    </WeeksHeadContainer>
  );
};
const WeeksHeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
`;
const WeeksHeadText = styled.Text`
  color: ${(props) => props.color || "black"};
  text-align: center;
  width: 14%;
`;
export default WeeksHeader;
