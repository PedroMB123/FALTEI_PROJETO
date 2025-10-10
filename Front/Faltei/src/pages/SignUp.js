import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

// Import Styles!
import { stylesSign } from "../styles/StylesSign.js";

import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function SignUp() {
  const login = useNavigation();
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rfID, setRfID] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleRegister() {
    try {
      if (!nome || !email || !senha || !rfID) {
        alert("Todos os campos são obrigatórios!");
        return;
      }

      if (senha !== confirmarSenha) {
        alert("As senhas não são iguais tente novamente!");
        return;
      }

      console.log(nome, email, rfID, senha, confirmarSenha);

      const res = await axios.post("http://10.144.170.46:3001/auth/SignUp", {
        nome,
        email,
        rfID,
        senha,
      });

      alert("Sucesso!", res.data.message);
      setNome("");
      setEmail("");
      setSenha("");
      setRfID("");
      setConfirmarSenha("");
    } catch (error) {
      console.log("Erro", error);
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
          placeholder="Digite seu nome completo"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#C8A2C8"}
          placeholder="Digite seu email educacional"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#C8A2C8"}
          placeholder="Confirme o RFID"
          value={rfID}
          onChangeText={setRfID}
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#C8A2C8"}
          placeholder="Crie sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#bebebe"}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>

      <TouchableOpacity style={stylesSign.bnt} onPress={handleRegister}>
        <Text style={{ color: "#E6E6FA" }}>Cadastre-se</Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 1,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "#6A0DAD" }}>Já tem uma conta? </Text>
        <Pressable onPress={() => login.navigate("SignIn")}>
          <Text style={{ fontWeight: "bold", color: "#6A0DAD" }}>
            Faça login
          </Text>
        </Pressable>
      </View>
      <StatusBar hidden />
    </View>
  );
}
