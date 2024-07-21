import React from "react";
import styles from "./Model.module.css";

const Model = ({ handleClose, title }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.close} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          <h3>Coming Soon!!</h3>
        </div>
      </div>
    </div>
  );
};

export default Model;
