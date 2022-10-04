import { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";
import ScreenContext from "../context/screenContext";

import LogoIcon from "./icons/LogoIcon";
import LogoIconXL from "./icons/LogoIconXL";
import SignOutButton from "./SignOutButton";

import colors from "../styles/colors";

export default function Header() {
    const { isTablet } = useContext(ScreenContext);
    const { isLoggedIn } = useSelector((state) => state.auth);

    return (
        <SafeAreaView style={styles.header}>
            {isTablet ? <LogoIconXL /> : <LogoIcon />}
            {isLoggedIn && <SignOutButton />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.cream,
        justifyContent: "space-between",
        padding: 15,
    },
});
