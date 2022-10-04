import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../styles/colors";

const Button = ({ handleSubmit, title, style }) => (
    <TouchableOpacity
        onPress={handleSubmit}
        title={title}
        style={[styles.button, style]}
    >
        <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.cream,
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Button;
