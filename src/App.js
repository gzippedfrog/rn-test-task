import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import Header from "./components/Header";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <>
            <StatusBar />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        contentStyle: {
                            backgroundColor: "#fff",
                        },
                        header: () => <Header />,
                    }}
                >
                    {isLoggedIn ? (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    ) : (
                        <Stack.Screen name="Login" component={LoginScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;
