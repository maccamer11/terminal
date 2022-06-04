import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { ChakraProvider } from "@chakra-ui/react";
import {useEffect, useRef} from 'react';

const App = ({ Component, pageProps }) => {
  const inputRef = useRef(null);
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CVDCV2BMBN"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CVDCV2BMBN');`}
</script>
        <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap" />
      </Head>
      <ChakraProvider>
        <MatomoProvider value={instance}>
          <div onClick={onClickAnywhere}>
            <Component {...pageProps} inputRef={inputRef} />
          
          </div>
         
        </MatomoProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
