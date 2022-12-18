import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, MyPage } from "./NavItems";
import Library from "./libarary/Library";
import Calendar from "./calendar/Calendar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "home" }),
        }}
      />
      <Tab.Screen
        name="CALENDAR"
        component={Calendar}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "calendar" }),
        }}
      />
      <Tab.Screen
        name="LIBRARY"
        component={Library}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "dumbbell" }),
        }}
      />
      <Tab.Screen
        name="MY PAGE"
        component={MyPage}
        options={{
          tabBarIcon: (props) =>
            TabIcon({ ...props, name: "face-man-outline" }),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabsNavigator;
