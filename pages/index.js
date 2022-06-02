import { useMatomo } from "@datapunt/matomo-tracker-react";
import { NextPageContext } from "next";
import Head from "next/head";
import React from "react";
import { useRef, useEffect } from 'react';
import packageJson from "../package.json";
import { History } from "../ components/history";
import { Input } from "../ components/input";
import { useHistory } from "../hooks/history";
import { banner } from "../utils/bin";
import styles from "../styles/Home.module.scss";
import { Box, Button } from "@chakra-ui/react";
import Banner from "../ components/banner/Banner";

const IndexPage = ({  inputRef }) => {
  const { trackPageView } = useMatomo();

  const testRef = useRef(null)
  const containerRef = useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  useEffect(() => {
    trackPageView({});
  }, []);





  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  useEffect(() => {
    if (testRef.current) {
      testRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [history]);


  return (
    <>
      <Head>
        <title>Maccamer | Terminal</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap" />
      </Head>
      <Box py="14" px="6" overflowY='scroll' className={styles.background}>
        <div className={styles.banner}>
          <Banner />
          <div ref={containerRef} className={styles.inner}>
            <History history={history} />

            <Input
              inputRef={inputRef}
              containerRef={containerRef}
              command={command}
              history={history}
              lastCommandIndex={lastCommandIndex}
              setCommand={setCommand}
              setHistory={setHistory}
              setLastCommandIndex={setLastCommandIndex}
              clearHistory={clearHistory}
              
            />
            
          </div>
        </div>
        <footer ref={testRef}></footer>
      </Box>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      version: packageJson.version,
    },
    revalidate: true,
  };
}

export default IndexPage;
