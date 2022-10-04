import { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import ScreenContext from "../context/screenContext";

import colors from "../styles/colors";

export default function Post({ post }) {
    const { isTablet } = useContext(ScreenContext);

    return (
        <View style={styles.post}>
            {isTablet && (
                <Image style={styles.image} source={{ uri: post.photoUrl }} />
            )}
            <Text style={styles.text}>Author: {post.userName}</Text>
            <Text style={styles.text}>Company: {post.userCompany}</Text>
            <Text style={styles.text}>Title: {post.title}</Text>
            <Text style={styles.text}>{post.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        padding: 16,
        margin: 8,
        flex: 1,
        borderColor: colors.blueWater,
        borderWidth: 5,
        borderRadius: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 16,
    },
});
