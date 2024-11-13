import React from "react";
import styled from "styled-components";

const DashboardBox = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 1280px;
  margin: 0 auto;
  padding: 100px 0;
`;

const SelectedPokemon = styled.li`
  max-width: 100px;
  border: 2px dashed #ddd;
  padding: 30px;
  border-radius: 20px;

  img {
    max-width: 100%;
  }
`;

const Dashboard = ({ selectedPokemon, deletePokemon }) => {
  // const array = Array.from({length: 6}, () => null);

  return (
    <DashboardBox>
      {selectedPokemon.map((pokemon, index) => {
        return (
          <SelectedPokemon key={index}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <p>{pokemon.korean_name}</p>
            <p>No. {pokemon.id}</p>
            <button onClick={() => deletePokemon(pokemon.id)}>삭제</button>
          </SelectedPokemon>
        );
      })}

      {new Array(6 - selectedPokemon.length).fill(null).map((_, index) => {
        return (
          <SelectedPokemon key={index}>
            <img
              src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
              alt=""
            />
          </SelectedPokemon>
        );
      })}
    </DashboardBox>
  );
};

export default Dashboard;
