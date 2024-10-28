import { useEffect, useState } from "react";
import "./App.css";
import tinyGamesApp from "tiny-games-app";

let gameReady: boolean;
let setGameReady: (val: boolean) => void;

function gameReadyListener() {
  setGameReady(true);
}

function App() {
  [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    tinyGamesApp.onGameReady(gameReadyListener);

    return () => {
      tinyGamesApp.offGameReady(gameReadyListener);
    };
  });

  return gameReady ?
  <h1>Tiny Games App</h1>
  :
  <h1>Loading...</h1>;
}

export default App;
