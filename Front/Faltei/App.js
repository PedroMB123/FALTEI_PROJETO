import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn.js";
import InitialPage from "./src/pages/InitialPage.js";
import OnboardingScreen from "./src/screens/OnboardingScreen.js";
import Onboarding from "./src/pages/Onboarding.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
<<<<<<< HEAD
        initialRouteName="InitialPage"
=======
        initialRouteName="Onboarding"
>>>>>>> Vitoria
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
<<<<<<< HEAD
  <Stack.Screen name="InitialPage" component={InitialPage} />
=======
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
>>>>>>> Vitoria
      </Stack.Navigator >
    </NavigationContainer >
  );
}
