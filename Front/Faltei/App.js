import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn.js";
import Onboarding from "./src/pages/Onboarding.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
