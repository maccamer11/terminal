import { useMatomo } from "@datapunt/matomo-tracker-react";
import { NextPageContext } from "next";
import Head from "next/head";
import React from "react";
import packageJson from "../package.json";
import { History } from "../ components/history";
import { Input } from "../ components/input";
import { useHistory } from "../hooks/history";
import { banner } from "../utils/bin";
import styles from "../styles/Home.module.scss";
import { Box } from "@chakra-ui/react";
import Banner from "../ components/banner/Banner";

const IndexPage = ({ version, quote, inputRef }) => {
  const { trackPageView } = useMatomo();

  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  /* const init = React.useCallback(() => setHistory(banner()), []); */

  React.useEffect(() => {
    trackPageView({});
  }, []);

 /*  React.useEffect(() => {
    init();
  }, [init]); */

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>Maccamer | Terminal</title>
      </Head>
      <Box py="14" px="10" overflowY='scroll' className={styles.background}>
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
