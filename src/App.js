import "./App.css";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prevState) => !prevState);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-evenly",
      }}
    >
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
