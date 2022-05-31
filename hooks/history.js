import React from "react";
import {useState} from 'react';

export const useHistory = (defaultValue) => {
  const [history, setHistory] = useState(defaultValue);
  const [command, setCommand] = useState("");
  const [lastCommandIndex, setLastCommandIndex] = useState(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
