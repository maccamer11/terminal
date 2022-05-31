import { useMatomo } from "@datapunt/matomo-tracker-react";
import React from "react";
import { commandExists } from "../../utils/commandExists";
import { shell } from "../../utils/shell";
import { handleTabCompletion } from "../../utils/tabCompletion";
import { Bash } from "../bash";
import styles from "./input.module.scss";
import { Flex } from "@chakra-ui/react";
import {useEffect, useState} from 'react';

const Input = ({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
}) => {
  const { trackEvent } = useMatomo();
  const onSubmit = async (event) => {
    const commands = history
      .map(({ command }) => command)
      .filter((command) => command);

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();

      clearHistory();
    }

    if (event.key === "Tab") {
      event.preventDefault();

      handleTabCompletion(command, setCommand);
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();

      setLastCommandIndex(0);
      /* inputRef.current.scrollIntoView({ behavior: 'smooth' }) */
     
      
      
      console.log(lastCommandIndex)

      await shell(history, command, setHistory, clearHistory, setCommand);

      trackEvent({ category: "Command Executed", action: command });
    
      
      /* containerRef.current.scrollTo(0, containerRef.current.scrollHeight); */
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!commands.length) {
        return;
      }

      const index = lastCommandIndex + 1;

      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commands.length) {
        return;
      }

      const index = lastCommandIndex - 1;

      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand("");
      }
    }
  };

  const onChange = ({ target: { value } }) => {
    setCommand(value);
  };

  return (
    <Flex>
      <Bash />

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        /* className={`bg-light-background dark:bg-dark-background focus:outline-none flex-grow ${
          commandExists(command) || command === ""
            ? "text-dark-green"
            : "text-dark-red"
        }`} */
        className={styles.input}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
      />
    </Flex>
  );
};

export default Input;
