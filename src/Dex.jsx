import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import PokemonList from "./components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    const isAreadySelelcted = selectedPokemon.some((item) => {
      return item && item.id === pokemon.id;
    });

    if (isAreadySelelcted) {
      alert("이미 저장된 포켓몬입니다.");
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert("6개 이상입니다");
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const deletePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <>
      <Dashboard
        selectedPokemon={selectedPokemon}
        deletePokemon={deletePokemon}
      />
      <PokemonList addPokemon={addPokemon} />
    </>
  );
};

export default Dex;
