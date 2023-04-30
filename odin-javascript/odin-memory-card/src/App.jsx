import { useRef } from "react";
import useCards from "./hooks/useCards";
import useScore from "./hooks/useScore";

import AppHeader from "./components/AppHeader";
import Scoreboard from "./components/Scoreboard";
import MainWrapper from "./components/MainWrapper";
import CardList from "./components/CardList/CardList";

function App() {
  const [cards, shuffleCards] = useCards();
  const { current: clickedCards } = useRef(new Set());
  const [score, incrementCurrent, resetCurrent] = useScore();

  const onCardClick = (cardID) => {
    if (clickedCards.has(cardID)) {
      resetCurrent();
      clickedCards.clear();
    } else {
      incrementCurrent();
      clickedCards.add(cardID);
    }

    shuffleCards();
  };

  return (
    <>
      <AppHeader>
        <Scoreboard score={score} />
      </AppHeader>
      <MainWrapper>
        <CardList cards={cards} onCardClick={onCardClick} />
      </MainWrapper>
    </>
  );
}

export default App;
