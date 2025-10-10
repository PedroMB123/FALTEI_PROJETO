import { StyleSheet } from "react-native";

export const StylesTelaDeMaterias = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ebe3",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    height: 100,
    backgroundColor: "#4B0082",
    justifyContent: "flex-end",
  },

  ptxt: {
    fontSize: 50,
    color: "#E6E6FA",
  },

  user: {
    position: "absolute",
    right: 0,
  },

  fundo: {
    flex: 1,
    backgroundColor: "#fafafa",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  calendar: {

  },
  balao1: {
    height: 250,
    width: 250,
    backgroundColor: "#C8A2C8",
    borderRadius: 30,
  },

  maisFaltas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  faltas: {
    height: 200,
    width: '45%',
    backgroundColor: "#C8A2C8",
    borderRadius: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  button: {
    height: 80,
    width: '40%',
    backgroundColor: "#C8A2C8",
    borderRadius: 10,
  },

  nome: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    backgroundColor: '#C8A2C8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  escrita: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },

  icone: {
    width: 100,
    height: 100,
    marginBottom: 6, // espaço entre ícone e texto
    resizeMode: "contain",
  }
});
