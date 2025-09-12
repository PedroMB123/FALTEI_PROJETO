import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

import { setItem } from "../components/AsyncStorage";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    setItem("onboarded", "1");
    navigation.navigate("InitialPage");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={{ color: "#f9ebe3" }}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#f9ebe3",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/faceID.json")}
                  autoPlay
                  loop
                  style={{
                    width: "90%",
                    height: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </View>
            ),
            title: "Reconhecimento facial rápido e reguro",
            titleStyles: {
              color: "#d80000",
              fontWeight: "bold",
              fontSize: 30,
            },
            subtitle:
              "Registre sua presença em segundos, sem listas ou assinaturas. Nosso sistema identifica você automaticamente e registra no banco de dados com total segurança.",
            subTitleStyles: {
              fontSize: "17",
            },
          },

          {
            backgroundColor: "#f9ebe3",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/todo.json")}
                  autoPlay
                  loop
                  style={{
                    width: "90%",
                    height: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </View>
            ),
            title: "Acompanhe suas aulas e atividades",
            titleStyles: {
              color: "#d80000",
              fontWeight: "bold",
              fontSize: 30,
            },
            subtitle:
              "Veja suas tarefas, materiais e avisos em um só lugar. Tudo organizado para você focar no que realmente importa: aprender.",
            ubTitleStyles: {
              fontSize: "17",
            },
          },
          {
            backgroundColor: "#f9ebe3",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/profileuser.json")}
                  autoPlay
                  loop
                  style={{
                    width: "90%",
                    height: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </View>
            ),
            title: "Perfil exclusivo para cada aluno",
            titleStyles: {
              color: "#d80000",
              fontWeight: "bold",
              fontSize: 30,
            },
            subtitle:
              "Faça login, acesse seu histórico, personalize suas informações e acompanhe seu desempenho de forma individual e segura.",
            ubTitleStyles: {
              fontSize: "17",
            },
          },
        ]}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ebe3",
  },

  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "#d80000",
    borderTopLeftRadius: "100%",
    borderBottomLeftRadius: "100%",
  },
});
