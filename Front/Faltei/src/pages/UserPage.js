import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { StylesUserPage } from "../styles/StylesUserPage";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function UserPage() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("@token");
      console.log(token);

      if (!token) {
        alert("Erro, você não está logado!");
        setLoading(false);
        return;
      }

      const res = await axios.get("http://10.144.170.46:3001/auth/UserPage", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data.user);

      alert("Sucesso!", res.data.message);
    } catch (error) {
      console.log("Erro", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@token");
    setUser("");
    alert("Logout Realizado");
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
        <Text style={StylesUserPage.label}>Nome:</Text>
        <Text style={StylesUserPage.value}>{user.nome}</Text>

        <Text style={StylesUserPage.label}>Email:</Text>
        <Text style={StylesUserPage.value}>{user.email}</Text>

        <Text style={StylesUserPage.label}>rfID:</Text>
        <Text style={StylesUserPage.value}>{user.rfid_tag}</Text>
      </View>
    </SafeAreaView>
  );
}
