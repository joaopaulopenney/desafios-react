import { useState } from 'react';
import './styles.scss';

/*
  DESAFIO TÉCNICO - JOGO DA VELHA - por fernandev

  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/

function App() {

  const [player, setPlayer] = useState(true);
  const [games, setGames] = useState([]);

  const game = (e) => {
    if (player) {
      e.target.innerText = "X";
      setPlayer(false);
    } else {
      e.target.innerText = "O";
      setPlayer(true);
    }

    
  }

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>jogo da velha</h1>
      <div className='board-game' onClick={(e) => game(e)}>
        <div className='item' id='1'></div>
        <div className='item' id='2'></div>
        <div className='item' id='3'></div>
        <div className='item' id='4'></div>
        <div className='item' id='5'></div>
        <div className='item' id='6'></div>
        <div className='item' id='7'></div>
        <div className='item' id='8'></div>
        <div className='item' id='9'></div>
      </div>
    </>
  );
}

export default App;
