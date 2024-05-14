import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([]);

  async function fetchPokemon() {
    let pokemonList = [];
    let dexNum = [];
    for (let x = 0; x < 10; x++) {
      const random = getRandomInt(1025);
      while (dexNum.includes(random)) {
        random = getRandomInt(1025);
      }
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${random}/`
      );
      const data = await response.json();
      dexNum.push(random);
      pokemonList.push(data);
    }
    return pokemonList;
  }

  useEffect(() => {
    fetchPokemon().then((data) => setPokemon(data));
  }, []);

  function cardClicked(name) {
    if (clicked.includes(name)) {
      console.log("LOSE");
      if (score > highScore) {
        setHighScore(score);
      }
      setClicked([]);
      shuffleCards(pokemon);
      return setScore(0);
    }
    setClicked([...clicked, name]);
    setScore(score + 1);
    shuffleCards(pokemon);
  }

  function shuffleCards(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return (
    <>
      <div className="score">
        <h1>SCORE: {score} | HIGH SCORE: {highScore}</h1>
      </div>
      <Card pokemon={pokemon} cardClicked={cardClicked} />
    </>
  );
}

export default App;
