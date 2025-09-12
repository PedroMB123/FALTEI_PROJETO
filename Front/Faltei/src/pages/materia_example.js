import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StylesInitialPage } from "../styles/StylesInitialPage";

export default function InitialPage() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>


      <View style={StylesInitialPage.balao1}></View>



      <StatusBar hidden />
    </View>
  );
}
