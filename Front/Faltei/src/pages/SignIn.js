import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

// Import Styles!
import { stylesSign } from "../styles/StylesSign.js";

import { StylesOnboarding } from "../styles/StylesOnboarding";

// Import Component TextInput
import InputComp from "../components."

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f9ebe3",
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={stylesSign.title}>FALTEI!</Text>

      <View style={{ marginTop: 70, width: "100%" }}>
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Digite seu email"
        />

        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={stylesSign.bnt}>
        <Text>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 1,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "red" }}>Não tem uma conta? </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "red" }}>Cadastre-se</Text>
        </Pressable>
        <Pressable style={{ position: "absolute", bottom: -20 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Esqueci minha senha
          </Text>
        </Pressable>
      </View>
      <StatusBar hidden />
    </View>
  );
}
