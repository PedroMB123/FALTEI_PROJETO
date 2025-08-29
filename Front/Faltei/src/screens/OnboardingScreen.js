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
    navigation.navigate("Home");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
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
            backgroundColor: "#ADD8E6",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/GymWorkout.json")}
                  autoPlay
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
            title: "Sport Club Corinthians Paulista",
          },
          {
            backgroundColor: "#87CEEB",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/cat.json")}
                  autoPlay
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
            title: "Vitória Tedeia",
          },
          {
            backgroundColor: "#4682B4",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/confeti.json")}
                  autoPlay
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
            title: "Vitória",
            subtitle:
              "Navegue de maneitra intuitiva, encontre o que precisa em segundos e aproveite ums experiência rápida e fluida!",
          },
          {
            backgroundColor: "#000080",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/images/healthyFood.json")}
                  autoPlay
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
            title: "Seus dados protegidos",
            subtitle:
              "Aqui você pode confiar que suas infromações estão sempre protegidas!",
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
    backgroundColor: "#fff",
  },

  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: "100%",
    borderBottomLeftRadius: "100%",
  },
});
