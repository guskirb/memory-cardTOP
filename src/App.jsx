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

  async function fetchPokemon() {
    let pokemonList = [];
    for (let x = 0; x < 8; x++) {
      const random = getRandomInt(1000);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
      const data = await response.json();
      pokemonList.push(data);
    }
    return pokemonList;
  }

  useEffect(() => {
    fetchPokemon().then((data) => setPokemon(data))
  }, []);

  return (
    <>
      <h1>Score {score}</h1>
      <h1>High Score {highScore}</h1>
      <Card pokemon={pokemon} />
    </>
  );
}

export default App;
