import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { ChakraProvider } from "@chakra-ui/react";
import {useEffect, useRef} from 'react';
import useKeypress from "../hooks/scroll";

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef(null);
  const instance = createInstance({
    urlBase: "https://mackenziecameron.com",
    trackerUrl: "https://mackenziecameron.com",
    srcUrl: "https://mackenziecameron.com",
    siteId: 1,
    configurations: {
      setRequestMethod: "GET",
    },
  });

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);





 

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap" />
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
