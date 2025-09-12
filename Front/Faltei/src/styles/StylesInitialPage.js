import { StyleSheet } from "react-native";

export const StylesInitialPage = StyleSheet.create({
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
});
