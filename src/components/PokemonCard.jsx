import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, addPokemon }) => {
  const navigate = useNavigate();

  return (
    <li>
      <a
        href="#none"
        onClick={(e) => {
          const tagName = e.target.tagName;
          if (tagName !== "BUTTON") {
            navigate(`/PokemonDetail/${pokemon.id}`);
          }
        }}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.korean_name}</p>
        <p>No. {pokemon.id}</p>
        <button onClick={() => addPokemon(pokemon)}>추가</button>
      </a>
    </li>
  );
};

export default PokemonCard;
