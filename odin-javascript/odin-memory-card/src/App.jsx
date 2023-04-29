import AppHeader from "./components/AppHeader";
import Scoreboard from "./components/Scoreboard";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <>
      <AppHeader>
        <Scoreboard />
      </AppHeader>
      <CardList />
    </>
  );
}

export default App;
