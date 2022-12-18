import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const Library = () => {
  return (
    <GestureHandlerRootView>
      <NavItemContainer>
        <Text>아이콘</Text>
        <Text>LIBRARY</Text>
        <RectButton></RectButton>
      </NavItemContainer>
    </GestureHandlerRootView>
  );
};

export default Library;

const NavItemContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
