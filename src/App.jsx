import { Provider } from "react-redux";
import "./App.css";
import Router from "./shared/Router.jsx";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
