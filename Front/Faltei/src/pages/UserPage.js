import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from "@react-navigation/native";
import { StylesInitialPage } from "../styles/StylesInitialPage";
import { useAuth } from "../context/AuthContext.js";

export default function InitialPage() {
  const navigation = useNavigation();
  const { user, updateUser } = useAuth();

  const [telefone, setTelefone] = useState(user?.telefone || "");
  const [cpf, setCpf] = useState(user?.cpf || "");

  const handleSave = () => {
    updateUser({ telefone, cpf });
    alert("Informações salvas com sucesso!");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={StylesInitialPage.header}>
        <Text style={StylesInitialPage.ptxt}>FALTEI!</Text>
        <EvilIcons onPress={() => navigation.navigate("UserPage")} name="user" size={60} color="#E6E6FA" style={StylesInitialPage.user} />
      </View>

      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Text style={styles.profileTitle}>Perfil do Aluno</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.titleName}>Nome</Text>
          <Text style={styles.valueName}>{user?.nome}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleName}>Email educacional</Text>
          <Text style={styles.valueName}>{user?.email}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleName}>Turma</Text>
          <Text style={styles.valueName}>{user?.turma}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleName}>Escola</Text>
          <Text style={styles.valueName}>{user?.escola}</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Telefone (Opcional)"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF (Opcional)"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />

        <Button title="Salvar" onPress={handleSave} />
      </ScrollView>

      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "flex-start",
    paddingTop: 120,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  titleName: {
    fontSize: 16,
    color: "#555",
  },
  valueName: {
    fontSize: 16,
    color: "#333",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
