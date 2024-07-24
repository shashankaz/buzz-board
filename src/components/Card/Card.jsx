import React, { useContext, useState, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import Model from "../Model/Model";
import styles from "./Card.module.css";
import { ToggleContext } from "../../context/ToggleContext";
import componentMapping from "../../utils/componentMapping";

const Card = ({ id, title, img }) => {
  const { cards, hideCard, showCard } = useContext(ToggleContext);

  const [options, setOptions] = useState(false);
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cards[id] === undefined) {
      showCard(id);
    }
  }, [cards, id, showCard]);

  const handleOpenSettings = () => {
    setModel(true);
  };

  const handleCloseSettings = () => {
    setModel(false);
  };

  const ComponentToRender = componentMapping[title] || null;

  return (
    <div>
      {cards[id] && (
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.option}>
              {/* <CiMenuKebab onClick={() => setOptions(!options)} /> */}
              {options && (
                <div className={styles.options}>
                  <p onClick={() => hideCard(id)}>
                    <FaEyeSlash />
                    Hide
                  </p>
                </div>
              )}
            </div>
          </div>
          {loading ? (
            <ImgSkleton />
          ) : (
            <div className={styles.img} onClick={handleOpenSettings}>
              <img src={img} alt="" />
            </div>
          )}
          {model && (
            <Model
              handleClose={handleCloseSettings}
              title={title}
              Component={ComponentToRender}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Card;

const ImgSkleton = () => {
  return (
    <div className={styles.img}>
      <div className={styles.skleton}></div>
    </div>
  );
};
