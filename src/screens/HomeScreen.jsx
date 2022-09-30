import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";

import { fetchPosts } from "../store/slices/postsSlice";
import { fetchUsers } from "../store/slices/usersSlice";

export default function HomeScreen() {
    const posts = useSelector((state) => state.posts.items);
    const users = useSelector((state) => state.users.items);

    const dispatch = useDispatch();

    useEffect(() => {
        !posts.length && dispatch(fetchPosts());
        !users.length && dispatch(fetchUsers());
    }, []);

    return (
        <ScrollView style={styles.postsContainer}>
            {!!(posts.length && users.length) &&
                posts.map((post) => <Post post={post} key={post.id} />)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    postsContainer: {
        padding: 15,
    },
});
