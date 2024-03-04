import { useEffect, useState } from 'react';
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
  const [games, setGames] = useState({ block1: "", block2: "", block3: "", block4: "", block5: "", block6: "", block7: "", block8: "", block9: "" });
  const [points, setPoints] = useState({ playerX: 0, playerO: 0 });
  const [result, setResult] = useState({ top: "", left: "", width: "", rotate: "" });
  const [timer, setTimer] = useState(false);

  const game = (e) => {

    const { id } = e.target;
    console.log(e)

    if (player) {
      setPlayer(false);
      setGames((prev) => {
        const newGames = { ...prev, [id]: "X" }
        return newGames;
      })
    } else {
      setPlayer(true);
      setGames((prev) => {
        const newGames = { ...prev, [id]: "O" }
        return newGames;
      })
    }

  }

  console.log(games)

  const plays = () => {
  
  if (games.block1 == "X" && games.block2 == "X" && games.block3 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "25%", left: "20%", width: "60vw", rotate: "null" })
  } else if (games.block4 == "X" && games.block5 == "X" && games.block6 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "20%", width: "60vw", rotate: "null" })
  } else if (games.block7 == "X" && games.block8 == "X" && games.block9 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "84%", left: "20%", width: "60vw", rotate: "null" })
  } else if (games.block1 == "X" && games.block4 == "X" && games.block7 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "13%", width: "45vw", rotate: "rotate(90deg)" })
  } else if (games.block2 == "X" && games.block5 == "X" && games.block8 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "27.5%", width: "45vw", rotate: "rotate(90deg)" })
  } else if (games.block3 == "X" && games.block6 == "X" && games.block9 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "42%", width: "45vw", rotate: "rotate(90deg)" })
  } else if (games.block1 == "X" && games.block5 == "X" && games.block9 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "20%", width: "60vw", rotate: "rotate(45deg)" })
  } else if (games.block3 == "X" && games.block5 == "X" && games.block7 == "X") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerX: points.playerX + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "20%", width: "60vw", rotate: "rotate(-45deg)" })
  } else if (games.block1 == "O" && games.block2 == "O" && games.block3 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "25%", left: "20%", width: "60vw", rotate: "null" })
  } else if (games.block4 == "O" && games.block5 == "O" && games.block6 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "20%", width: "60vw", rotate: "null" })
  } else if (games.block7 == "O" && games.block8 == "O" && games.block9 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "84%", left: "20%", width: "60vw", rotate: "null" })
  } else if (games.block1 == "O" && games.block4 == "O" && games.block7 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "13%", width: "45vw", rotate: "rotate(90deg)" })
  } else if (games.block2 == "O" && games.block5 == "O" && games.block8 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "27.5%", width: "45vw", rotate: "rotate(90deg)" })
  } else if (games.block3 == "O" && games.block6 == "O" && games.block9 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "42%", width: "45vw", rotate: "rotate(90deg)" })
  } else if (games.block1 == "O" && games.block5 == "O" && games.block9 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "20%", width: "60vw", rotate: "rotate(45deg)" })
  } else if (games.block3 == "O" && games.block5 == "O" && games.block7 == "O") {
    setPoints((prev) => {
      const newPoints = { ...prev, playerO: points.playerO + 1 }
      return newPoints;
    })
    setResult({ top: "54%", left: "20%", width: "60vw", rotate: "rotate(-45deg)" })
  } else if (games.block1 && games.block2 && games.block3 && games.block4 && games.block5 && games.block6 && games.block7 && games.block8 && games.block9) {
    alert("Draw")
    setGames({ block1: "", block2: "", block3: "", block4: "", block5: "", block6: "", block7: "", block8: "", block9: "" });
  }
  }

  useEffect(() => {
    plays();
  }, [player]);

  useEffect(() => {
    setTimer(true);
    setTimeout(function() {
      setGames({ block1: "", block2: "", block3: "", block4: "", block5: "", block6: "", block7: "", block8: "", block9: "" });
      setResult({ top: "", left: "", width: "", rotate: "" });
      setTimer(false);
    }, 2000)
  }, [points]);

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>jogo da velha</h1>
      <div className='points'>PlayerX : {points.playerX} VS PlayerO : {points.playerO}</div>
      <div className='playing'>Playing: {player && "PlayerX"} {!player && "PlayerO"}</div>
      <div className='board-game' onClick={(e) => {if (!timer) {game(e)}}}>
        <div className='item' id='block1' onClick={(e) => {if (games.block1) {e.preventDefault(); e.stopPropagation();}}}>{games.block1}</div>
        <div className='item' id='block2' onClick={(e) => {if (games.block2) {e.preventDefault(); e.stopPropagation();}}}>{games.block2}</div>
        <div className='item' id='block3' onClick={(e) => {if (games.block3) {e.preventDefault(); e.stopPropagation();}}}>{games.block3}</div>
        <div className='item' id='block4' onClick={(e) => {if (games.block4) {e.preventDefault(); e.stopPropagation();}}}>{games.block4}</div>
        <div className='item' id='block5' onClick={(e) => {if (games.block5) {e.preventDefault(); e.stopPropagation();}}}>{games.block5}</div>
        <div className='item' id='block6' onClick={(e) => {if (games.block6) {e.preventDefault(); e.stopPropagation();}}}>{games.block6}</div>
        <div className='item' id='block7' onClick={(e) => {if (games.block7) {e.preventDefault(); e.stopPropagation();}}}>{games.block7}</div>
        <div className='item' id='block8' onClick={(e) => {if (games.block8) {e.preventDefault(); e.stopPropagation();}}}>{games.block8}</div>
        <div className='item' id='block9' onClick={(e) => {if (games.block9) {e.preventDefault(); e.stopPropagation();}}}>{games.block9}</div>
      </div>
      <div className='result' style={{ top: result.top, left: result.left, width: result.width, transform: result.rotate }}></div>
    </>
  );
}

export default App;
