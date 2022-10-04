import { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/postsSlice";

import ScreenContext from "../context/screenContext";

import Post from "../components/Post";

export default function HomeScreen() {
    const { isTablet } = useContext(ScreenContext);

    const { items: posts, error } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <>
            {!!error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}

            {!error && !!posts.length && (
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <Post post={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    numColumns={isTablet ? 2 : 1}
                    style={styles.list}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 8,
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
