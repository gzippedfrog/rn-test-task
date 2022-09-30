import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../store/slices/usersSlice";

export default function Post({ post, style }) {
    const user = useSelector(selectUserById(post.userId));

    return (
        <View style={[styles.post, style]}>
            <Text style={styles.text}>Author: {user.name}</Text>
            <Text style={styles.text}>Company: {user.company.name}</Text>
            <Text style={styles.text}>Title: {post.title}</Text>
        </View>
    );
}

const BlueWater = "#27569C";

const styles = StyleSheet.create({
    post: {
        borderColor: BlueWater,
        borderWidth: 5,
        borderRadius: 10,
        padding: 17,
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 17,
    },
});
