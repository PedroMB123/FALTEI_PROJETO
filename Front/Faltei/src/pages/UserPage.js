import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { StylesUserPage } from "../styles/StylesUserPage";

export default function UserPage() {
  // 🔹 Aqui você pode futuramente buscar os dados do banco
  const user = {
    name: "João Silva",
    email: "joao.silva@email.com",
    turma: "3º Ano B",
    photo: "https://i.pravatar.cc/300" // foto genérica
  };

  return (
    <SafeAreaView style={StylesUserPage.container}>
      <Text style={StylesUserPage.title}>Perfil</Text>

      {/* Foto do usuário */}
      <View style={StylesUserPage.imageContainer}>
        <Image source={{ uri: user.photo }} style={StylesUserPage.image} />
      </View>

      {/* Informações do usuário */}
      <View style={StylesUserPage.infoBox}>
        <Text style={StylesUserPage.label}>Nome</Text>
        <Text style={StylesUserPage.value}>{user.name}</Text>

        <Text style={StylesUserPage.label}>Email</Text>
        <Text style={StylesUserPage.value}>{user.email}</Text>

        <Text style={StylesUserPage.label}>Turma</Text>
        <Text style={StylesUserPage.value}>{user.turma}</Text>
      </View>
    </SafeAreaView>
  );
}


