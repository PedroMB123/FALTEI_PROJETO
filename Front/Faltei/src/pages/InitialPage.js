import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

import EvilIcons from '@expo/vector-icons/EvilIcons';

import { StylesInitialPage } from "../styles/StylesInitialPage";


export default function InitialPage() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={StylesInitialPage.header}>
        <Text style={StylesInitialPage.ptxt}> Faltei! </Text>
        <EvilIcons name="user" size={60} color="#E6E6FA" style={StylesInitialPage.user} />
      </View >
      <View style={StylesInitialPage.fundo}>
        <View style={StylesInitialPage.balao1}>
        </View>
        <View style={StylesInitialPage.balao2}>
        </View>
        <View style={StylesInitialPage.balao3}>
          <TouchableOpacity />
        </View>
      </View>
      <StatusBar hidden />
    </View>
  )
}
