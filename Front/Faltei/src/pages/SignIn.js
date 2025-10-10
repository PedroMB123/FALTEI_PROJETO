import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { stylesSign } from "../styles/StylesSign.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
      const res = await axios.post("http://10.144.170.46:3001/auth/SignIn", {
        email,
        senha,
      });
      const token = res.data.token;

      await AsyncStorage.setItem("@token", token);

      console.log(token);
      const data = res.data;

      navigation.navigate("InitialPage");
    } catch (error) {
      console.error(error);

      if (error.res) {
        // Erro retornado pelo back-end
        alert(error.res.data.message || "Email ou senha incorretos!");
      } else {
        // Erro de rede
        alert("Erro ao conectar com o servidor.");
      }
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

      <TouchableOpacity style={stylesSign.bnt} onPress={validaLogin}>
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
          <Text style={{ fontWeight: "bold", color: "#6A0DAD" }}>
            Cadastre-se
          </Text>
        </Pressable>
      </View>

      <StatusBar hidden />
    </View>
  );
}
