import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime="1" />
        <TimerChallenge title="not so easy" targetTime="5" />
        <TimerChallenge title="tough" targetTime="10" />
        <TimerChallenge title="pros only" targetTime="15" />
      </div>
    </>
  );
}

export default App;
