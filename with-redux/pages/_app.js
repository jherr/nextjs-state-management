import "../styles/globals.css";
import { Provider } from "react-redux";
import getStore from "../src/store";

function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
