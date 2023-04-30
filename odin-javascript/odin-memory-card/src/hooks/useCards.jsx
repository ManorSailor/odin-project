/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import { useState } from "react";
import uniqid from "uniqid";

const initialCards = () => {
  const MAX_CARDS = 12;
  const cards = [];

  for (let i = 0; i < MAX_CARDS; i++) {
    cards.push({
      id: uniqid(),
      img: `https://picsum.photos/seed/${uniqid()}/400`,
      title: "Random Picture",
    });
  }

  return cards;
};

function useCards() {
  const [cards, setCards] = useState(() => initialCards());

  const shuffle = () => setCards([...cards].sort(() => Math.random() - 0.5));

  return [cards, shuffle];
}

export default useCards;
