import { StyleSheet } from "react-native";

export const StylesOnboarding = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },

  viewSignUp: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 7,
  },

  btn: {
    backgroundColor: "#8b4513",
    width: "80%",
    padding: 10,
    alignItems: "center",
    marginTop: 200,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 5,
  },

  txt: {
    color: "#fff",
  },
});
