const initialState = {
  selectedPokemon: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return {
        ...state,
        selectedPokemon: [...state.selectedPokemon, action.payload],
      };
    case "DELETE_POKEMON":
      return {
        ...state,
        selectedPokemon: state.selectedPokemon.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default pokemonReducer;
