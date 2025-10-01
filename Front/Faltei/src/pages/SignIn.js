import { Text, View, TouchableOpacity, TextInput, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { stylesSign } from "../styles/StylesSign.js";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  async function validaLogin() {
    if (!email || !senha) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    try {
      // Requisição POST com axios
      const response = await axios.post("https://meu-backend.com/login", {
        email,
        senha
      });

      const data = response.data;


      navigation.navigate("InitialPage");
    } catch (error) {
      console.error(error);

      if (error.response) {
        // Erro retornado pelo back-end
        alert(error.response.data.message || "Email ou senha incorretos!");
      } else {
        // Erro de rede
        alert("Erro ao conectar com o servidor.");
      }
    }
  }

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#E6E6FA", padding: 40, justifyContent: "center", alignItems: "center" }}>
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

      <TouchableOpacity style={stylesSign.bnt} onPress={validaLogin}>
        <Text style={{ color: "#E6E6FA" }}>Login</Text>
      </TouchableOpacity>

      <View style={{ justifyContent: "center", flexDirection: "row", gap: 1, marginTop: 5 }}>
        <Text style={{ color: "#6A0DAD" }}>Não tem uma conta? </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "#6A0DAD" }}>Cadastre-se</Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </View>
  );
}
