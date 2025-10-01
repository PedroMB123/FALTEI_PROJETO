import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

export default function UserPage() {
  // 🔹 Aqui você pode futuramente buscar os dados do banco
  const user = {
    name: "João Silva",
    email: "joao.silva@email.com",
    turma: "3º Ano B",
    photo: "https://i.pravatar.cc/300" // foto genérica
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      {/* Foto do usuário */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.photo }} style={styles.image} />
      </View>

      {/* Informações do usuário */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Turma</Text>
        <Text style={styles.value}>{user.turma}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
