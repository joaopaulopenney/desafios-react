import { useEffect, useState } from 'react';

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

import axios from 'axios';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        // reordenando alfabeticamente nossos pokemons
        const sortedArray = [...response.data.results];

        sortedArray.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        const promisesArray = sortedArray.map((item) => {
            return axios.get(item.url);
          });

        Promise.all(promisesArray).then(values => setList(values));
      });
  }, []);


  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      <hr />
      {list.length === 0 && "carregando pokemons..."}
      {list.map(item => (
         <Pokemon key={item.data.name} details={item.data} />
      ))}
    </>
  );
}

const Pokemon = ({ details }) => {
  if (!details) {
    return <div>-</div>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={details.sprites.front_default} style={{ width: 30, marginRight: 20 }} />
      <span><b>{details.name}</b> - EXP {details.base_experience}</span>
    </div> 
  );
};

export default App;
