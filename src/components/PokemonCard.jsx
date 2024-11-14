import React, { useContext } from "react";
//import { PokemonDataContext } from "../context/PokemonDataContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../slice/slice";

const PokemonCard = ({ pokemon }) => {
  //const navigate = useNavigate();
  //const { addPokemon } = useContext(PokemonDataContext); context 용.

  const dispatch = useDispatch();

  const handleAddPokemon = (e, pokemon) => {
    e.preventDefault();
    dispatch(addPokemon(pokemon));
  };

  return (
    <li>
      <Link to={`/PokemonDetail/${pokemon.id}`}>
        <div>
          <p>
            No. {pokemon.id} {pokemon.korean_name}
          </p>
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <p>타입 : {pokemon?.types.join(", ")}</p>
          <button onClick={(e) => handleAddPokemon(e, pokemon)}>추가</button>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
