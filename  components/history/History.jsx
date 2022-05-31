import React from "react";
import { Bash } from "../bash";
import styles from "./history.module.scss";

export const History = ({ history }) => {
  
  return (
    <>
      {history.map((entry, index) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Bash />
            </div>

            <div className={styles.flexGrow}>{entry.command}</div>
          </div>

        {/*   <p
            className={styles.test}
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          /> */}
          <p className={styles.test}>
           
            {entry.output}
            
           
          </p>
        </div>
      ))}
    </>
  );
};

export default History;
