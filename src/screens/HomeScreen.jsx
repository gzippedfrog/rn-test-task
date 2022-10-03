import { useContext, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/postsSlice";

import ScreenContext from "../context/screenContext";

import Post from "../components/Post";

export default function HomeScreen() {
    const { isTablet } = useContext(ScreenContext);

    const posts = useSelector((state) => state.posts.items);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        !!posts.length && (
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(item) => item.id}
                horizontal={false}
                numColumns={isTablet ? 2 : 1}
                style={styles.list}
            />
        )
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 8,
    },
});
