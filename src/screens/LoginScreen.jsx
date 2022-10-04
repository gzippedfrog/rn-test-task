import { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";

import ScreenContext from "../context/screenContext";

import LoginForm from "../components/LoginForm";

export default function LoginScreen() {
    const { isTablet } = useContext(ScreenContext);

    return (
        <ScrollView
            contentContainerStyle={[
                isTablet && styles.formContainerWide,
                styles.formContainer,
            ]}
        >
            <LoginForm />
        </ScrollView>
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
