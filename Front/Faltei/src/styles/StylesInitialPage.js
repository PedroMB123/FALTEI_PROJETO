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
  },

  balao1: {
    height: 250,
    width: 250,
    backgroundColor: "#C8A2C8",
    borderRadius: 30,
  },

  balao2: {
    height: 200,
    width: 350,
    backgroundColor: "#C8A2C8",
    borderRadius: 30
  },

  balao3: {
    height: 200,
    width: 400,
    backgroundColor: "#C8A2C8",
    borderRadius: 30
  }
})
