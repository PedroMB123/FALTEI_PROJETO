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

export default function SignUp() {
  const login = useNavigation();
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function validaCadastro() {
    let ConfirmUser = "faltei@gmail.com";
    let ConfirmPassword = "faltei123";

    if (!nome || !email || !confirmarEmail || !senha || !confirmarSenha) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    if (email !== confirmarEmail) {
      alert("Os e-mails não são iguais!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais!");
      return;
    }

    if (ConfirmUser === email && ConfirmPassword === senha) {

      alert("Cadastro realizado com sucesso!");
      navigation.navigate("SignIn");
    } else {

      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  };

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
          placeholder="Digite seu email educacional ou pessoal"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={stylesSign.input}
          placeholderTextColor={"#C8A2C8"}
          placeholder="Confirme seu email"
          value={confirmarEmail}
          onChangeText={setConfirmarEmail}
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

      <TouchableOpacity style={stylesSign.bnt} onPress={validaCadastro}>
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
          <Text style={{ fontWeight: "bold", color: "#6A0DAD" }}>Faça login</Text>
        </Pressable>
      </View>
      <StatusBar hidden />
    </View>
  );
}
