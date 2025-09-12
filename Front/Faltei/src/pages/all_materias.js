import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StylesInitialPage } from "../styles/StylesInitialPage";
import { Calendar } from 'react-native-calendars';

export default function InitialPage() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={StylesInitialPage.header}>
        <Text style={StylesInitialPage.ptxt}> Faltei! </Text>
      </View >

      <View style={StylesInitialPage.fundo}>

        <View style={StylesInitialPage.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
        </View>

        <View style={StylesInitialPage.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
        </View>

        <View style={StylesInitialPage.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
        </View>

        <View style={StylesInitialPage.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
        </View>

      </View >

      <StatusBar hidden />
    </View >
  );
}
