import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn.js";
import InitialPage from "./src/pages/InitialPage.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="InitialPage" component={InitialPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
