import React from "react";
import styles from "./ChatGPT.module.css";

const ChatGPT = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <a href="https://chatgpt.com/" target="blank">
          Open ChatGPT in New Window
        </a>
      </button>
    </div>
  );
};

export default ChatGPT;
