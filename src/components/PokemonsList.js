import React from "react";
import Pokemon from "./Pokemon";
import classes from "./PokemonsList.module.css";

const PokemonsList = (props) => {
  return (
    <ul className={classes["pokemon-list"]}>
      {props.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} name={pokemon.name} />
      ))}
    </ul>
  );
};

export default PokemonsList;
