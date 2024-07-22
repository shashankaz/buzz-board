import React from "react";
import styles from "./Model.module.css";

const Model = ({ handleClose, title, Component }) => {
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
          <Component />
        </div>
      </div>
    </div>
  );
};

export default Model;
