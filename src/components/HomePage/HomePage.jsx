import React from "react";
import SidePane from "../SidePane/SidePane";
import Card from "../Card/Card";
import widgets from "../../data/widgets.json";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <SidePane />
      <div className={styles.main}>
        {widgets.map((widget) => (
          <Card
            key={widget.id}
            id={widget.id} // Pass the id to the Card component
            title={widget.title}
            description={widget.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
