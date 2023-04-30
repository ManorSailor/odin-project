import { useRef } from "react";
import useCards from "./hooks/useCards";

import AppHeader from "./components/AppHeader";
import Scoreboard from "./components/Scoreboard";
import MainWrapper from "./components/MainWrapper";
import CardList from "./components/CardList/CardList";

function App() {
  const [cards, shuffleCards] = useCards();
  const { current: clickedCards } = useRef(new Set());

  const onCardClick = (cardID) => {
    if (clickedCards.has(cardID)) {
      // reset score
      clickedCards.clear();
    } else {
      // increment score
      clickedCards.add(cardID);
    }

    shuffleCards();
  };

  return (
    <>
      <AppHeader>
        <Scoreboard />
      </AppHeader>
      <MainWrapper>
        <CardList cards={cards} onCardClick={onCardClick} />
      </MainWrapper>
    </>
  );
}

export default App;
