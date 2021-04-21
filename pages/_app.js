import "../styles/globals.css";
import "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
