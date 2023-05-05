import { arrayOf, objectOf, string, func } from "prop-types";

/* eslint-disable react/jsx-props-no-spreading */
import Card from "./Card";

function CardList({ cards, onCardClick }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-items-center gap-4">
      {cards.map((card) => (
        <li key={card.id} className="">
          <Card onCardClick={onCardClick} {...card} />
        </li>
      ))}
    </ul>
  );
}

CardList.propTypes = {
  cards: arrayOf(objectOf(string)).isRequired,
  onCardClick: func.isRequired,
};

export default CardList;
