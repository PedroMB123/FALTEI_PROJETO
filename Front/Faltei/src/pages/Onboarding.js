import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

// Import Styles!
import { StylesOnboarding } from "../styles/StylesOnboarding";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View style={StylesOnboarding.container}>
      <Text style={StylesOnboarding.title}>Bem-vindo (a)!</Text>

      <Text style={StylesOnboarding.txt1}>
        Onde a presença encontra o futuro da educação!
      </Text>

      <TouchableOpacity
        style={StylesOnboarding.btn}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={StylesOnboarding.txt}>Login com Email</Text>
      </TouchableOpacity>

      <View style={StylesOnboarding.viewSignUp}>
        <Text style={StylesOnboarding.txt2}>Você não possui conta?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "#4B0082" }}>Sign Up</Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </View>
  );
}
