import Scoreboard from "./Scoreboard";

function AppHeader() {
  return (
    <div className="navbar bg-base-200 justify-between">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        Memory Card
      </a>
      <Scoreboard />
    </div>
  );
}

export default AppHeader;
