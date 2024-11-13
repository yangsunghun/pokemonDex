import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonDataContext } from "../context/PokemonDataContext";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const { addPokemon } = useContext(PokemonDataContext);

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
        <div>
          <p>
            No. {pokemon.id} {pokemon.korean_name}
          </p>
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <p>타입 : {pokemon?.types.join(", ")}</p>
          <button onClick={() => addPokemon(pokemon)}>추가</button>
        </div>
      </a>
    </li>
  );
};

export default PokemonCard;
