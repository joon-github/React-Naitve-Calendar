import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";
import BottomTabsNavigator from "./scr/component/BottomTabsNavigator";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator></BottomTabsNavigator>
    </NavigationContainer>
  );
}
const AppContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
