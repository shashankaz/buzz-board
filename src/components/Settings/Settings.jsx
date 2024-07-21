import React, { useContext } from "react";
import widgets from "../../data/widgets.json";
import styles from "./Settings.module.css";
import { ToggleContext } from "../../context/ToggleContext";

const Settings = ({ handleClose }) => {
  const { cards, hideCard, showCard } = useContext(ToggleContext);

  const handleToggle = (id) => {
    if (cards[id]) {
      hideCard(id);
    } else {
      showCard(id);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Settings</h2>
          <button className={styles.close} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          <h3>Manage Widgets</h3>
          <ul>
            {widgets.map((widget) => (
              <li key={widget.id}>
                <label>
                  {widget.title}
                  <div className={styles.checkboxWrapper}>
                    <input
                      className={styles.ikxBAC}
                      type="checkbox"
                      checked={cards[widget.id]}
                      onChange={() => handleToggle(widget.id)}
                    />
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
