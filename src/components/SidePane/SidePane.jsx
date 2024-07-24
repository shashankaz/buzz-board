import React, { useEffect, useState } from "react";
import { IoMdSettings, IoMdFlashlight, IoMdMoon } from "react-icons/io";
import Settings from "../Settings/Settings";
import announcements from "../../data/announcements.json";
import styles from "./SidePane.module.css";

const SidePane = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [topSites, setTopSites] = useState([]);
  const [theme, setTheme] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTopSites([
      { title: "Google", url: "https://www.google.com" },
      { title: "YouTube", url: "https://www.youtube.com" },
      { title: "Facebook", url: "https://www.facebook.com" },
      { title: "Twitter", url: "https://www.twitter.com" },
      { title: "LinkedIn", url: "https://www.linkedin.com" },
    ]);
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minites = dateTime.getMinutes().toString().padStart(2, "0");
  const day = days[dateTime.getDay()];
  const date = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();

  return (
    <div className={styles.sidePane}>
      <div className={styles.top}>
        <p className={styles.time}>{`${hours}:${minites}`}</p>
        <p className={styles.date}>{`${day}, ${month} ${date}, ${year}`}</p>
        <div>
          <h2>Announcements</h2>
          <ul>
            {announcements.map((announcement, index) => (
              <li key={index}>{announcement.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.middle}>
        <h2>Most Visited</h2>
        <ul>
          {topSites.map((site, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <IoMdSettings />
              </div>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div>
          <IoMdSettings onClick={handleOpenSettings} />
          {showSettings && <Settings handleClose={handleCloseSettings} />}
        </div>
        {/* <div onClick={toggleTheme}>
          {theme ? <IoMdFlashlight /> : <IoMdMoon />}
        </div> */}
      </div>
    </div>
  );
};

export default SidePane;
