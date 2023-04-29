function Scoreboard() {
  return (
    <div className="flex gap-2">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Current Score</div>
          <div className="stat-value">0</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Best Score</div>
          <div className="stat-value">0</div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
