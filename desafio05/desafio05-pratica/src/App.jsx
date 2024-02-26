import { useEffect, useState } from 'react';

import axios from "axios";

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [pokes, setPokes] = useState([]);

  const getPokemon = () => {
    var endpoints = []
    
    for ( let i = 1 ; i <= 100 ; i++ ) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokes(res)).catch((err) => console.log(err))
  };

  const sortArray = () => {
    pokes.sort(function(a, b) {
      if (a.data.name < b.data.name) {
        return -1;
      } else {
        return true;
      }
    }) 
  };

  useEffect(() => {
    
    getPokemon();

  }, []);

  sortArray();

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      <div className='pokemons' style={{ display:"flex", flexDirection:"column" }}>
        {
          pokes.map((pokemon, key) => (
            <div className='pokemon' key={key}><img src={pokemon.data.sprites.front_default} alt="Pokemon" /> {pokemon.data.name} EXP:{pokemon.data.base_experience}</div>
          ))
        }
      </div>
    </>
  );
}

export default App;
