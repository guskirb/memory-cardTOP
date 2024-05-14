function Card({ pokemon }) {
  let listPokemon = pokemon.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))

  return <div>{listPokemon}</div>;
}

export default Card;
