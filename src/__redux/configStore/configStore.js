import { combineReducers, createStore } from "redux";
import pokemonReducer from "../modules/pokemonData";

const rootReducer = combineReducers({
  pokemonReducer,
});

const store = createStore(rootReducer);

export default store;
