import React from "react";
import styles from "./Polls.module.css";

const Polls = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdKvZre5szO8h5Z7lvVGbB5vLknNTg9MRy95F8A2FqgQaHhDA/viewform?embedded=true"
        className={styles.iframe}
        allowFullScreen
        title="Google Form"
      ></iframe>
    </div>
  );
};

export default Polls;
