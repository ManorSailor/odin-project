import { shape, number } from "prop-types";

function Scoreboard({ score: { current, best } }) {
  return (
    <div className="stats bg-base-300 shadow">
      <div className="stat place-items-center py-2">
        <div className="stat-title">Current Score</div>
        <div className="stat-value">{current}</div>
      </div>
      <div className="stat place-items-center py-2">
        <div className="stat-title">Best Score</div>
        <div className="stat-value">{best}</div>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  score: shape({
    current: number.isRequired,
    best: number.isRequired,
  }).isRequired,
};

export default Scoreboard;
