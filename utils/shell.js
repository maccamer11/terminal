import React from "react";

import * as bin from "./bin";

export const shell = async (
  history,
  command,
  setHistory,
  clearHistory,
  setCommand
) => {
  const args = command.split(" ");

  if (command === "clear") {
    clearHistory();
  } else if (command === "") {
    alert('Please enter a command')
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(
      `${args[0]}: Command not found. Try 'help' to get started.`
    );
  } else {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand("");
};
