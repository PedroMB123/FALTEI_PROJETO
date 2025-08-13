import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";

import { StatusBar } from "expo-status-bar";

// Import Styles!
import { stylesSign } from "../styles/StylesSign.js";

import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const login = useNavigation();
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
          placeholder="Digite seu nome completo"
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Digite seu email educacional ou pessoal"
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Confirme seu email"
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Crie sua senha"
          secureTextEntry={true}
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={stylesSign.bnt}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 1,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "red" }}>Já tem uma conta? </Text>
        <Pressable onPress={() => login.navigate("SignIn")}>
          <Text style={{ fontWeight: "bold", color: "red" }}>Faça login</Text>
        </Pressable>
      </View>
      <StatusBar hidden />
    </View>
  );
}
