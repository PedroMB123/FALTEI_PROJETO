import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StylesTelaDeMaterias } from "../styles/StylesTelaDeMaterias";

export default function InitialPage() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={StylesTelaDeMaterias.header}>
        <Text style={StylesTelaDeMaterias.ptxt}> Faltei! </Text>
      </View >

      <View style={StylesTelaDeMaterias.fundo}>

        <View style={StylesTelaDeMaterias.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>História</Text>
            <Image source={require('../assets/images/historia.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Língua Inglesa</Text>
            <Image source={require('../assets/images/ingles.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
        </View>

        <View style={StylesTelaDeMaterias.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Geografia</Text>
            <Image source={require('../assets/images/geografia.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Matemática</Text>
            <Image source={require('../assets/images/matematica.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
        </View>

        <View style={StylesTelaDeMaterias.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Português</Text>
            <Image source={require('../assets/images/portugues.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Química</Text>
            <Image source={require('../assets/images/quimica.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
        </View>

        <View style={StylesTelaDeMaterias.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Física</Text>
            <Image source={require('../assets/images/fisica.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Materia")} style={StylesTelaDeMaterias.nome} >
            <Text style={StylesTelaDeMaterias.escrita}>Biologia</Text>
            <Image source={require('../assets/images/biologia.png')} style={StylesTelaDeMaterias.icone}></Image>
          </TouchableOpacity>
        </View>

      </View >

      <StatusBar hidden />
    </View >
  );
}
