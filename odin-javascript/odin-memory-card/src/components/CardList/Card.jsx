import { string, func } from "prop-types";

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
function Card({ id, img, title, onCardClick }) {
  return (
    <div
      className="card w-72 bg-base-100 shadow-xl cursor-pointer hover:scale-[1.025] transition-transform"
      onClick={() => onCardClick(id)}
    >
      <figure className="px-5 pt-5">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body p-3 items-center text-center">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: string.isRequired,
  img: string.isRequired,
  title: string.isRequired,
  onCardClick: func.isRequired,
};

export default Card;
