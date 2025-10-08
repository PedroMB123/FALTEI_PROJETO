import { StyleSheet } from "react-native";

export const StylesInitialPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ebe3",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    //height: 100,
    //justifyContent: "flex-end",
    //headerTitleAlign: 'left',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: '#4B0082',
  },

  ptxt: {
    fontSize: 50,
    color: "#E6E6FA",
    fontFamily: 'BebasNeue',
    textAlign: 'left',
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
    marginBottom: 50,
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

  faltas1: {
    height: 200,
    marginLeft: 15,
    width: '45%',
    backgroundColor: "#C8A2C8",
    borderRadius: 20,
  },

  faltas2: {
    height: 200,
    marginRight: 15,
    width: '45%',
    backgroundColor: "#C8A2C8",
    borderRadius: 20,
  },

  button: {
    width: 220,
    paddingVertical: 40,
    backgroundColor: "#6c3483",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 15,
  },

  acesso: {
    color: "#FAFAFA"
  },
});
