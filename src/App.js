import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonsList from "./components/PokemonsList";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonsHandler = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedPokemons = data.results.map((pokemonData) => {
          return {
            name: pokemonData.name,
          };
        });
        setPokemons(transformedPokemons);
      });
  };

  return (
    <React.Fragment>
      <Header />
      <section>
        <button onClick={fetchPokemonsHandler}>Fetch Pokemon</button>
      </section>
      <section>
        <PokemonsList pokemons={pokemons} />
      </section>
    </React.Fragment>
  );
};

export default App;
