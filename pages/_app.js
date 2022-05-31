import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { ChakraProvider } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef(null);
  const instance = createInstance({
    urlBase: "https://a.m4tt72.xyz",
    trackerUrl: "https://a.m4tt72.xyz/js/",
    srcUrl: "https://a.m4tt72.xyz/js/",
    siteId: 1,
    configurations: {
      setRequestMethod: "GET",
    },
  });

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <ChakraProvider>
        <MatomoProvider value={instance}>
          <div onClick={onClickAnywhere}>
            {/*  <main > */}
            <Component {...pageProps} inputRef={inputRef} />
            {/* </main> */}
          </div>
        </MatomoProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
