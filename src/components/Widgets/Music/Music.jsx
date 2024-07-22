import React from "react";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        className={styles.iframe}
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default Music;
