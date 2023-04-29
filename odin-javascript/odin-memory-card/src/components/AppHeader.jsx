import Scoreboard from "./Scoreboard";

function AppHeader() {
  return (
    <div className="navbar justify-between">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        Memory Card
      </a>
      <Scoreboard />
    </div>
  );
}

export default AppHeader;
