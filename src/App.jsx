import { useEffect, useState } from "react";
import "./App.css";

let pokemon = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    for (let x = 0; x < 9; x++) {
      let random = getRandomInt(1025);
      fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
        .then((response) => response.json())
        .then((data) => pokemon.push(data));
    }
    console.log(pokemon);
  }, []);

  return (
    <>
      <h1>Score {score}</h1>
      <h1>High Score {highScore}</h1>
    </>
  );
}

export default App;
