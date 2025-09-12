import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

// Import Styles!
import { stylesSign } from "../styles/StylesSign.js";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  function validaLogin() {
    let ConfirmUser = "faltei@gmail.com";
    let ConfirmPassword = "faltei123";

    if (!email || !senha) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    if (ConfirmUser === email && ConfirmPassword === senha) {
      alert("Login realizado com sucesso!");
      navigation.navigate("OnboardingScreen");
    } else {

      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#E6E6FA",
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={stylesSign.title}>FALTEI!</Text>

      <View style={{ marginTop: 70, width: "100%" }}>
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#C8A2C8"}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#C8A2C8"}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity
        style={stylesSign.bnt}
        onPress={validaLogin}
      >
        <Text style={{ color: "#E6E6FA" }}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 1,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "#6A0DAD" }}>Não tem uma conta? </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "#6A0DAD" }}>Cadastre-se</Text>
        </Pressable>
        <Pressable style={{ position: "absolute", bottom: -20 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#6A0DAD",
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
