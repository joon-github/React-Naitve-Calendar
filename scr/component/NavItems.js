import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export const Home = () => {
  return (
    <NavItemContainer>
      <Text>아이콘</Text>
      <Text>HOME</Text>
    </NavItemContainer>
  );
};

export const MyPage = () => {
  return (
    <NavItemContainer>
      <Text>아이콘</Text>
      <Text>MYPAGE</Text>
    </NavItemContainer>
  );
};

const NavItemContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
