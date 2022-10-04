import { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";

import { useDispatch } from "react-redux";
import { signIn } from "../store/slices/authSlice";
import ScreenContext from "../context/screenContext";

import Button from "../components/Button";

import colors from "../styles/colors";

const initialValues = { email: "", password: "" };

function validate(values) {
    const errors = {};
    const email = values.email.trim();
    const password = values.password.trim();

    if (!email) {
        errors.email = "Required";
    }
    if (!password) {
        errors.password = "Required";
    }

    if (email !== "F" || password !== "1") {
        errors.common = "Incorrect email or password";
    }

    return errors;
}

export default function LoginForm() {
    const { isTablet } = useContext(ScreenContext);

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(signIn());
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={[styles.form, styles.border]}>
                    <Text style={[styles.text, styles.formTitleText]}>
                        Autorization
                    </Text>

                    <View style={[styles.formField]}>
                        <Text
                            style={[
                                isTablet
                                    ? styles.formInputLabelWide
                                    : styles.formInputLabel,
                                styles.text,
                            ]}
                        >
                            login
                        </Text>
                        <TextInput
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            style={[
                                styles.formInput,
                                styles.text,
                                styles.border,
                            ]}
                        />
                    </View>
                    <Text style={styles.error}>{errors.email || " "}</Text>

                    <View style={[styles.formField]}>
                        <Text
                            style={[
                                isTablet
                                    ? styles.formInputLabelWide
                                    : styles.formInputLabel,
                                styles.text,
                            ]}
                        >
                            password
                        </Text>
                        <TextInput
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            style={[
                                styles.formInput,
                                styles.text,
                                styles.border,
                            ]}
                        />
                    </View>
                    <Text style={styles.error}>{errors.password || " "}</Text>
                    <Text style={styles.error}>{errors.common || " "}</Text>

                    <Button handleSubmit={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 32,
        width: "100%",
        maxWidth: 480,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    formTitleText: {
        textAlign: "center",
        color: colors.blueWater,
        marginBottom: 16,
    },
    formField: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    formInput: {
        paddingHorizontal: 8,
        marginTop: 16,
        backgroundColor: "#D9D9D9",
        flexGrow: 1,
    },
    formInputLabel: {
        width: "100%",
    },
    formInputLabelWide: {
        flexBasis: 140,
    },
    error: {
        color: "red",
        marginBottom: 16,
    },
    border: {
        borderColor: colors.blueWater,
        borderWidth: 5,
        borderRadius: 10,
    },
});
