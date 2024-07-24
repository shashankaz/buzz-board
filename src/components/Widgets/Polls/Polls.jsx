import React from "react";
import styles from "./Polls.module.css";

const Polls = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://forms.gle/fL8a6TKh6A13ueBY7"
        className={styles.iframe}
        allowFullScreen
        title="Google Form"
      ></iframe>
    </div>
  );
};

export default Polls;
