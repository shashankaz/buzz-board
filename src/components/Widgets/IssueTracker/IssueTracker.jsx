import React from "react";
import styles from "./IssueTracker.module.css";

const IssueTracker = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQk1TYqAJa7A6kWflP8Wb0KJm1NMc7YY82V5ArAw7P6Yy8T8RZ8p1A2NphO-UHkkr6U4ztb_H7bNzrR/pubhtml?widget=true&headers=false"
        className={styles.iframe}
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default IssueTracker;
