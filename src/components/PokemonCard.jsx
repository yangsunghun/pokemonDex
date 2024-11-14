import React, { useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { PokemonDataContext } from "../context/PokemonDataContext";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  //const navigate = useNavigate();

  const { addPokemon } = useContext(PokemonDataContext);

  return (
    <li>
      <Link to={`/PokemonDetail/${pokemon.id}`}>
        <div>
          <p>
            No. {pokemon.id} {pokemon.korean_name}
          </p>
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <p>타입 : {pokemon?.types.join(", ")}</p>
          <button onClick={(e) => addPokemon(e, pokemon)}>추가</button>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
