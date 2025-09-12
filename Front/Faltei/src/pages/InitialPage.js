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
              backgroundColor: '#FAFAFA',  // Branco gelo como fundo principal
              calendarBackground: '#E6E6FA',  // Lavanda clara como fundo do calendário
              textSectionTitleColor: '#6A0DAD',  // Roxo médio para título das seções
              textSectionTitleDisabledColor: '#A9A9A9',  // Cinza claro para texto desabilitado
              selectedDayBackgroundColor: '#4B0082',  // Roxo profundo para o dia selecionado
              selectedDayTextColor: '#FAFAFA',  // Branco gelo para o texto do dia selecionado
              todayTextColor: '#4B0082',  // Roxo profundo para o texto de hoje
              dayTextColor: '#2C2C2C',  // Cinza grafite para o texto dos dias
              textDisabledColor: '#A9A9A9',  // Cinza claro para dias desabilitados
              dotColor: '#4B0082',  // Roxo profundo para os pontos de datas marcadas
              selectedDotColor: '#FAFAFA',  // Branco gelo para o ponto do dia selecionado
              arrowColor: '#6A0DAD',  // Roxo médio para as setas de navegação
              monthTextColor: '#4B0082',  // Roxo profundo para o nome do mês
              indicatorColor: '#4B0082',  // Roxo profundo para o indicador de mês
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
