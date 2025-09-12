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
    backgroundColor: "#d80000",
    justifyContent: "flex-end",
  },

  ptxt: {
    fontSize: 50,
    color: "#f9ebe3",
  },

  user: {
    position: "absolute",
    right: 0,
  },

  fundo: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f9ebe3"
  },

  balao1: {
    height: 250,
    width: 250,
    backgroundColor: "#d80000",
    marginLeft: 90,
    marginTop: 40,
    borderRadius: 30
  },

  balao2: {
    height: 200,
    width: 350,
    backgroundColor: "#d80000",
    marginLeft: 40,
    marginTop: 45,
    borderRadius: 30
  },

  balao3: {
    height: 200,
    width: 400,
    backgroundColor: "#d80000",
    marginLeft: 15,
    marginTop: 45,
    borderRadius: 30
  }
})
