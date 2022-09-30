import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#E4B062",
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
});

const Button = ({ handleSubmit, title, style }) => (
    <TouchableOpacity
        onPress={handleSubmit}
        title={title}
        style={[styles.button, style]}
    >
        <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
);

export default Button;
