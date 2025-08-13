import { TextInput } from "react-native";

import { stylesSign } from "../styles/StylesSign.js";

export default function InputComp({ textPlaceholder, password }) {
  return (
    <TextInput
      style={stylesSign.input}
      placeholder={textPlaceholder}
      placeholderTextColor={"#bebebe"}
      secureTextEntry={password}
    />
  );
}
