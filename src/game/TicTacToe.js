import { useEffect, useState } from 'react';
import './TicTacToe.css'
import { Box, Typography } from '@mui/material';
import Coin from '../images/coin.png'

function TicTacToe() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if(winner) {
      console.log("Jogo esta finalizado!");
      return null;
    };


    if(board[index] !== "") {
      console.log("Posição ocupada!");
      return null;
    };

    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }

  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWaysToWin.forEach(cells => {
      if(cells.every(cell => cell === "O")) setWinner("O")
      if(cells.every(cell => cell === "X")) setWinner("X")
    });


    checkDraw();
  }

  const checkDraw = () => {
    if(board.every(item=>item !== "")) setWinner("E");
  }

  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  }
  return(
    <div className='body'>
        <Box sx={{zIndex: 1, position: 'relative'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '50px', position: 'fixed', top: '50px' ,right: 0 }}>
          <img src={Coin} alt="Moeda" />
          <Typography sx={{ color: 'white', fontSize: '20px', marginLeft: '5px' }}>{localStorage.getItem('coin')}</Typography>
        </Box>
        <main>
        <h1 className="title">Jogo da velha</h1>
        <div className={`board ${winner ? "game-over" : ""}`}>
          {board.map((item, index)=>(
            <div 
                key={index} 
                className={`cell ${item}`}
                onClick={()=> handleCellClick(index)}
                >
                  {item}
              </div>
          ))}
        </div>
        <Box onClick={()=>window.location.assign("/Home")} sx={{backgroundColor: '#a526d5', color: 'white', width: '200px', 
            fontWeight: 'bolder', height: '40px', borderRadius: '15px', display: 'flex',
           alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: '30px', cursor: 'pointer'}}>Voltar</Box>
        {winner &&
          <footer>
            {winner === "E" ?
              <h2 className="winner-message">
              <span className={winner}></span> Empatou!
            </h2>
            :
              <h2 className="winner-message">
                <span className={winner}>{winner}</span> venceu!
              </h2>
            }
            <button onClick={resetGame}>Recomeçar jogo!</button>
          </footer>
        }
      </main>
    </Box>
  </div>
  );
}

export default TicTacToe;