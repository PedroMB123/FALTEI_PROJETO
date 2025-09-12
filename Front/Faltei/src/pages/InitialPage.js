import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StylesInitialPage } from "../styles/StylesInitialPage";
import { Calendar } from 'react-native-calendars';  // Importando o calendário

export default function InitialPage() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={StylesInitialPage.header}>
        <Text style={StylesInitialPage.ptxt}> Faltei! </Text>
        <EvilIcons name="user" size={60} color="#E6E6FA" style={StylesInitialPage.user} />
      </View >

      <View style={StylesInitialPage.fundo}>

        {/* Calendário com as novas cores */}
        <View style={{
          margin: 10, height: 20,
          width: '100%',
        }}>
          <Calendar
            // Estilo básico
            style={{ borderRadius: 10 }}
            theme={{
              backgroundColor: '#FAFAFA',
              calendarBackground: '#E6E6FA',
              textSectionTitleColor: '#6A0DAD',
              textSectionTitleDisabledColor: '#A9A9A9',
              selectedDayBackgroundColor: '#4B0082',
              selectedDayTextColor: '#FAFAFA',
              todayTextColor: '#4B0082',
              dayTextColor: '#2C2C2C',
              textDisabledColor: '#A9A9A9',
              dotColor: '#4B0082',
              selectedDotColor: '#FAFAFA',
              arrowColor: '#6A0DAD',
              monthTextColor: '#4B0082',
              indicatorColor: '#4B0082', z
            }}
            // Configuração do calendário
            current={'2025-09-12'}
            minDate={'2023-01-01'}
            maxDate={'2025-12-31'}
            onDayPress={(day) => {
              console.log('selected day', day);
            }}
            monthFormat={'yyyy MM'}
            markingType={'simple'}
            markedDates={{
              '2025-09-12': { selected: true, marked: true, dotColor: '#4B0082' },
            }}
          />
        </View>
        {/* Fim do calendário */}

        <View style={StylesInitialPage.maisFaltas}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.faltas} />
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.faltas} />
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

        <View style={StylesInitialPage.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesInitialPage.button} />
        </View>

      </View >

      <StatusBar hidden />
    </View >
  );
}
