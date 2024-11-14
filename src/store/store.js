import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slice/slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
export default store;
