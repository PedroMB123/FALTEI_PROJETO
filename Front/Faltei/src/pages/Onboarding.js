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

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={StylesOnboarding.container}
      blurRadius={5}
    >
      <MaterialCommunityIcons
        name="flower-tulip-outline"
        size={200}
        color="white"
      />

      <Text style={StylesOnboarding.title}>WELCOME</Text>

      <Text style={StylesOnboarding.txt}>Do meditation. Stay focused.</Text>
      <Text style={StylesOnboarding.txt}>Live a healthy life.</Text>

      <TouchableOpacity
        style={StylesOnboarding.btn}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={StylesOnboarding.txt}>Login With Email</Text>
      </TouchableOpacity>

      <View style={StylesOnboarding.viewSignUp}>
        <Text style={StylesOnboarding.txt}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "#8b4513" }}>Sign Up</Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </ImageBackground>
  );
}
