import { useEffect, useState } from "react";
import "./Web.css";
import tinyGamesWeb from "tiny-games-web";

let gameReady: boolean;
let setGameReady: (val: boolean) => void;

function gameReadyListener() {
  setGameReady(true);
}

function Web() {
  [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    tinyGamesWeb.onGameReady(gameReadyListener);

    return () => {
      tinyGamesWeb.offGameReady(gameReadyListener);
    };
  });

  return gameReady ?
  <h1>Tiny Games Web</h1>
  :
  <h1>Loading...</h1>;
}

export default Web;
