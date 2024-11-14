import React, { useState, createContext } from "react";

export const PokemonDataContext = createContext();

export const PokemonDataProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (e, pokemon) => {
    e.stopProp

    const isAreadySelelcted = selectedPokemon.some((item) => {
      return item && item.id === pokemon.id;
    });

    if (isAreadySelelcted) {
      alert("이미 저장된 포켓몬입니다.");
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert("6개 이상 추가할 수 없습니다.");
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const deletePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <PokemonDataContext.Provider
      value={{ selectedPokemon, addPokemon, deletePokemon }}
    >
      {children}
    </PokemonDataContext.Provider>
  );
};
