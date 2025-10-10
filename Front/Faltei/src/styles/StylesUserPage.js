import { StyleSheet } from "react-native";


export const StylesUserPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6E6FA",
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        color: "#4B0082"
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    infoBox: {
        width: "100%",
        backgroundColor: "#C8A2C8",
        borderRadius: 12,
        padding: 20,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#4B0082",
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: "#E6E6FA",
        marginBottom: 5,
    },
});