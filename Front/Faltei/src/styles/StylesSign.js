import { StyleSheet } from "react-native";

export const stylesSign = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#d80000",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#bebebe",
    paddingLeft: 10,
    paddingEnd: 70,
    color: "#bebebe",
    marginBottom: 40,
  },
  bnt: {
    backgroundColor: "#d80000",
    borderRadius: 30,
    height: "30",
    width: "180",
    justifyContent: "center",
    alignItems: "center",
  },
});
