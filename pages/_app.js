import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Head from "next/head";

const progress = new ProgressBar({
  size: 4,
  color: "#38a169",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GhostDB</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
