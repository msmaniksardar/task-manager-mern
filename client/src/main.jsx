import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./store.jsx";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
