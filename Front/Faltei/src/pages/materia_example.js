import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { stylesMateria } from "../styles/StylesMateria"

export default function ToDo() {
  const [atividade, setAtividade] = useState('');
  const [atividades, setAtividades] = useState([]);

  const adicionarAtividade = () => {
    if (atividade) {
      setAtividades([...atividades, { id: Math.random().toString(), name: atividade, completed: false }]);
      setAtividade('');
    }
  };

  const atividadeCompleta = (id) => {
    setAtividades(atividades.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const apagarAtividades = (id) => {
    setAtividades(atividades.filter(t => t.id !== id));
  };

  return (
    <View style={stylesMateria.container}>
      <Text style={stylesMateria.title}>To-Do List</Text>

      <TextInput
        style={stylesMateria.input}
        placeholder="Adicionar nova tarefa"
        value={atividade}
        onChangeText={setAtividade}
      />

      <Button title="Adicionar" onPress={adicionarAtividade} />

      <FlatList
        data={atividades}
        renderItem={({ item }) => (
          <View style={stylesMateria.atividadeContainer}>
            <TouchableOpacity onPress={() => atividadeCompleta(item.id)}>
              <Text style={[stylesMateria.atividadeText, item.completed && stylesMateria.completed]}>{item.name}</Text>
            </TouchableOpacity>
            <Button title="X" onPress={() => apagarAtividades(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
