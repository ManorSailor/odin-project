function Scoreboard() {
  return (
    <div className="stats shadow">
      <div className="stat place-items-center py-2">
        <div className="stat-title">Current Score</div>
        <div className="stat-value">0</div>
      </div>
      <div className="stat place-items-center py-2">
        <div className="stat-title">Best Score</div>
        <div className="stat-value">0</div>
      </div>
    </div>
  );
}

export default Scoreboard;
