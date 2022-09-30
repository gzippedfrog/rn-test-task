import { registerRootComponent } from "expo";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";

import App from "./App";

function Provider() {
    return (
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    );
}

export default registerRootComponent(Provider);
