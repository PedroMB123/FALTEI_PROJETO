import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn.js";
import InitialPage from "./src/pages/InitialPage.js";
import OnboardingScreen from "./src/screens/OnboardingScreen.js";
import Onboarding from "./src/pages/Onboarding.js";
import Materia from "./src/pages/materia_example.js"
import AllMateria from "./src/pages/all_materias.js"
import UserPage from "./src/pages/UserPage.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Materia" component={Materia} />
        <Stack.Screen name="AllMateria" component={AllMateria} />
        <Stack.Screen name="UserPage" component={UserPage} />
      </Stack.Navigator >
    </NavigationContainer >
  );
}
