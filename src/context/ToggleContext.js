import React, { createContext, useState, useEffect } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : {};
  });

  const [spotify, setSpotify] = useState(() => {
    const savedSpotify = localStorage.getItem("spotify");
    return savedSpotify
      ? JSON.parse(savedSpotify)
      : "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M";
  });

  const setSpotifyUrl = (url) => {
    const embeddedUrl = url.replace(
      "https://open.spotify.com/playlist/",
      "https://open.spotify.com/embed/playlist/"
    );
    setSpotify(embeddedUrl);
  };

  const hideCard = (id) => {
    setCards((prevCards) => ({ ...prevCards, [id]: false }));
  };

  const showCard = (id) => {
    setCards((prevCards) => ({ ...prevCards, [id]: true }));
  };

  return (
    <ToggleContext.Provider
      value={{ cards, hideCard, showCard, spotify, setSpotifyUrl }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
