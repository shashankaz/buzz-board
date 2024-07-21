import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : {};
  });

  const hideCard = (id) => {
    setCards((prevCards) => {
      const newCards = { ...prevCards, [id]: false };
      localStorage.setItem("cards", JSON.stringify(newCards));
      return newCards;
    });
  };

  const showCard = (id) => {
    setCards((prevCards) => {
      const newCards = { ...prevCards, [id]: true };
      localStorage.setItem("cards", JSON.stringify(newCards));
      return newCards;
    });
  };

  return (
    <ToggleContext.Provider value={{ cards, hideCard, showCard }}>
      {children}
    </ToggleContext.Provider>
  );
};
