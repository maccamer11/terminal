import { Text } from "@chakra-ui/react";
import React from "react";
import styles from "./bash.module.scss";

export const Bash = () => {
  return (
    <div className={styles.bash}>
      <span className={styles.guest}>guest</span>
      <span className={styles.at}>@</span>
      <span className={styles.user}>terminal.maccamer</span>
      <span className={styles.at}>:$ ~ </span>
    </div>
  );
};

export default Bash;
