import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";

const StyleUl = styled.ul`
  width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  li {
    position: relative;
    height: 200px;
    padding: 30px 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
  }
  li a {
    text-decoration: none;
    color: inherit;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  li button {
    position: relative;
    z-index: 99;
  }
`;

const PokemonList = ({ addPokemon }) => {
  return (
    <StyleUl>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
          />
        );
      })}
    </StyleUl>
  );
};

export default PokemonList;
