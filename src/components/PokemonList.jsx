import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";

const StyleUl = styled.ul`
  width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;

  li {
    position: relative;
    height: 200px;
    border-radius: 10px;
    text-align: center;
    background-color: #eee;
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
    padding: 7px;
  }

  li div {
    background: #fff;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    box-sizing: border-box;
    padding: 30px 0;
  }

  li button {
    display: block;
    width: 50%;
    margin: 0 auto;
    border: 1px solid #ccc;
    background: #fff;
    position: relative;
    z-index: 99;
  }
`;

const PokemonList = () => {
  return (
    <StyleUl>
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </StyleUl>
  );
};

export default PokemonList;
