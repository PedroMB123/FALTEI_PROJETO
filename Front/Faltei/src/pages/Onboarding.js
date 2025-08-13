import {
  ImageBackground,
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
    <ImageBackground
      style={StylesOnboarding.container}
      source={require("../assets/images/onboarding.png")}
      blurRadius={5}
    >
      <Text style={StylesOnboarding.title}>WELCOME</Text>

      <Text style={StylesOnboarding.txt}>Do meditation. Stay focused.</Text>
      <Text style={StylesOnboarding.txt}>Live a healthy life.</Text>

      <TouchableOpacity
        style={StylesOnboarding.btn}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={StylesOnboarding.txt}>Entre com email</Text>
      </TouchableOpacity>

      <View style={StylesOnboarding.viewSignUp}>
        <Text style={StylesOnboarding.txt}>Não tem uma conta?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "#8b4513" }}>
            Cadastre-se
          </Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </ImageBackground>
  );
}
