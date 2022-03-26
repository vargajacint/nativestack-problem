import React from "react";

/* Data Things*/
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Navigators - Screens */
import LessonScreen from "../screens/core_screens/Lesson/LessonScreen";

export type RootStackParamList = {
  BottomTabs: undefined;

  /* Modals */
  Lesson: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomNavigator}
        options={{ orientation: "portrait" }}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={{
          orientation: "landscape_left",
          presentation: "fullScreenModal",
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreen.navigationOptions}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={SearchScreen.navigationOptions}
      />
      <Tab.Screen
        name="MyList"
        component={MyListScreen}
        options={MyListScreen.navigationOptions}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={MyProfileNavigationOptions}
      />
    </Tab.Navigator>
  );
}
