import "../styles/globals.css";
import { PokemonProvider } from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <PokemonProvider pokemon={pageProps.pokemon}>
      <Component {...pageProps} />
    </PokemonProvider>
  );
}

export default MyApp;
