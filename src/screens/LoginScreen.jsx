import { View, Text, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";

import Button from "../components/Button";

import { useDispatch } from "react-redux";
import { signIn } from "../store/slices/authSlice";

export default function LoginScreen() {
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(signIn());
    };

    return (
        <Formik
            initialValues={{
                email: "foobar@mail.com",
                password: "123",
            }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={[styles.formContainer, styles.border]}>
                    <Text style={[styles.text, styles.formTitleText]}>
                        Autorization
                    </Text>

                    <Text style={styles.text}>login</Text>
                    <TextInput
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        style={[styles.text, styles.formInput, styles.border]}
                    />

                    <Text style={styles.text}>password</Text>
                    <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        style={[styles.text, styles.formInput, styles.border]}
                    />

                    <Button
                        handleSubmit={handleSubmit}
                        title="Submit"
                        style={styles.button}
                    />
                </View>
            )}
        </Formik>
    );
}

const BlueWater = "#27569C";

const styles = StyleSheet.create({
    border: {
        borderColor: BlueWater,
        borderWidth: 5,
        borderRadius: 10,
    },
    formContainer: {
        padding: 32,
        paddingTop: 10,
        margin: 15,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    formTitleText: {
        textAlign: "center",
        color: BlueWater,
    },
    formInput: {
        backgroundColor: "#D9D9D9",
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 20,
    },
});
