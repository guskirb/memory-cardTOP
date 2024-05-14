function Card({ pokemon }) {
  console.log(pokemon);

  let listPokemon = pokemon.map((item) => (
    <div
      className="card"
      key={item.id}
      onClick={() => {
        let cry = new Audio(item.cries.latest);
        cry.play();
      }}
    >
      <img src={item.sprites.front_default}></img>
      <h2>{item.species.name.toUpperCase()}</h2>
    </div>
  ));

  return <div className="cardContainer">{listPokemon}</div>;
}

export default Card;
