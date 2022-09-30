import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import LogoutButton from "./components/LogoutButton";
import LogoIcon from "./icons/LogoIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLogedIn);

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#E4B062" },
                        contentStyle: {
                            backgroundColor: "#fff",
                        },
                        headerLeft: () => <LogoIcon />,
                        headerRight: () => isLoggedIn && <LogoutButton />,
                        headerTitle: () => null,
                    }}
                >
                    {isLoggedIn ? (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    ) : (
                        <Stack.Screen name="Login" component={LoginScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
