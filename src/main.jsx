// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import App from "./App";
import { ItemsProvider } from "./context/favouriteProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ItemsProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ItemsProvider>

  // </StrictMode>
);
