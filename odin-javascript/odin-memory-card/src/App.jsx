import AppHeader from "./components/AppHeader";
import Scoreboard from "./components/Scoreboard";
import MainWrapper from "./components/MainWrapper";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <>
      <AppHeader>
        <Scoreboard />
      </AppHeader>
      <MainWrapper>
        <CardList />
      </MainWrapper>
    </>
  );
}

export default App;
