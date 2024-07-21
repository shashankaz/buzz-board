import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import Model from "../Model/Model";
import styles from "./Card.module.css";

const Card = ({ title, description }) => {
  const [options, setOptions] = useState(false);
  const [active, setActive] = useState(true);
  const [model, setModel] = useState(false);

  const handleOpenSettings = () => {
    setModel(true);
  };

  const handleCloseSettings = () => {
    setModel(false);
  };

  const hideCard = () => {
    setActive(false);
  };

  return (
    <div>
      {active && (
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className={styles.option}>
              <CiMenuKebab onClick={() => setOptions(!options)} />
              {options && (
                <div className={styles.options}>
                  <p onClick={hideCard}>
                    <FaEyeSlash />
                    Hide
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.img} onClick={handleOpenSettings}></div>
          {model && <Model handleClose={handleCloseSettings} title={title} />}
        </div>
      )}
    </div>
  );
};

export default Card;
