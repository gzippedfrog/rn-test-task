import { useWindowDimensions } from "react-native";
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";

import ScreenContext from "./context/screenContext";

import App from "./App";

function Provider() {
    const { width } = useWindowDimensions();
    const isTablet = width >= 720;

    return (
        <StoreProvider store={store}>
            <SafeAreaProvider>
                <ScreenContext.Provider value={{ isTablet }}>
                    <App />
                </ScreenContext.Provider>
            </SafeAreaProvider>
        </StoreProvider>
    );
}

export default registerRootComponent(Provider);
