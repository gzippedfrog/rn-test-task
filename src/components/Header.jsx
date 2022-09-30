import { View, Text, StyleSheet } from "react-native";
import LogoIcon from "../icons/LogoIcon";
import LogoutButton from "./LogoutButton";

export default function Header() {
    return (
        <View style={styles.header}>
            <LogoIcon />
            <LogoutButton />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#E4B062",
        justifyContent: "space-between",
    },
});
