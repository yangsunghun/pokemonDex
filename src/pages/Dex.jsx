import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonDataProvider } from "../context/PokemonDataContext";

const Dex = () => {
  return (
    <PokemonDataProvider>
      <Dashboard />
      <PokemonList />
    </PokemonDataProvider>
  );
};

export default Dex;
