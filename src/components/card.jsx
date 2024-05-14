function Card({ pokemon, cardClicked }) {
  console.log(pokemon);

  let listPokemon = pokemon.map((item) => (
    <div
      className={"card"} 
      key={Math.random()}
      onClick={() => {
        let cry = new Audio(item.cries.latest);
        cry.play();
        cardClicked(item.name)
      }}
    >
      <img src={item.sprites.front_default}></img>
      <h2>{item.species.name.toUpperCase()}</h2>
    </div>
  ));

  return <div className="cardContainer">{listPokemon}</div>;
}

export default Card;
