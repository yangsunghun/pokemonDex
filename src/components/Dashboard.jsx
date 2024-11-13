import React from "react";
import styled from "styled-components";

const DashboardBox = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
  padding: 100px 0;
`;

const SelectedPokemon = styled.li`
  border: 2px dashed #ddd;
  flex: 1;
  padding: 30px 0;
  border-radius: 20px;
  text-align: center;

  img {
    max-width: 100%;
    width: 96px;
  }

  button {
    display: block;
    width: 50%;
    margin: 10px auto;
    border: 1px solid #ccc;
    background: #fff;
    position: relative;
    z-index: 99;
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
            <p>
              No. {pokemon.id} {pokemon.korean_name}
            </p>
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
