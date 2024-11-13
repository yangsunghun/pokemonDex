import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IntroSec = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 800px;
    max-width: 100%;
    transform: translateY(-50px);
  }

  button {
    padding: 10px 50px 12px ;
    font-size: 20px;
    color: #333;
    background: #fff;
    border-width: 2px;
    border-style: solid;
    border-color: #999;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <IntroSec>
      <img
        src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
        alt="Pokemon Logo"
      />
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </IntroSec>
  );
};

export default Home;
