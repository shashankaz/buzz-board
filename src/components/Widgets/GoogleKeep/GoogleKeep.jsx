import React from "react";
import styles from "./GoogleKeep.module.css";

const GoogleKeep = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://keep.google.com/"
        className={styles.iframe}
        allowFullScreen
        title="Google Keep"
      ></iframe>
    </div>
  );
};

export default GoogleKeep;
