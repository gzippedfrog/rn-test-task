import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import ScreenContext from "../context/screenContext";

import LoginForm from "../components/LoginForm";

export default function LoginScreen() {
    const { isTablet } = useContext(ScreenContext);

    return (
        <View
            style={[styles.formContainer, isTablet && styles.formContainerWide]}
        >
            <LoginForm />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        alignItems: "center",
        padding: 15,
        flex: 1,
    },
    formContainerWide: {
        justifyContent: "center",
    },
});
