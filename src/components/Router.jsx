import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Dex from "../Dex";
import PokemonDetail from "./PokemonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemonDetail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
