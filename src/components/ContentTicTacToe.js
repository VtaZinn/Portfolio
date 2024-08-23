import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import Retangle from "../images/retangle.png";
import '../style/Home.css';
import coin from '../images/coin.png';
import imgTicTacToe from '../images/tictactoe.png'
import Coin from "../images/coin.png";
import { colorPurple } from "../theme/theme";
import { useState } from "react";

function ContentTicTacToe() {
  const [textCoin, setTextCoin] = useState('');
  
  function priceGame() {
    let res = 0;
    const currentCoin = parseInt(localStorage.getItem('coin' )|| 0);
    if(currentCoin < 2) {
      setTextCoin('SUAS MOEDAS ACABARAM :(');
    } else {
      res = currentCoin - 2;

      localStorage.setItem('coin', res);

      window.location.assign("/tic-tac-toe");
    }
  }
  return(
    <>
      <Wrapper sx={{gap: {xs: '70px', lg: '150px'} , marginTop: '100px', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
        <Box>
          <img src={imgTicTacToe} alt="Logo da woovi" className="imgTicTacToe"/>
        </Box>
        <Typography sx={{fontSize: {xs: '35px', lg: '40px'} , color: 'white'}}>JOGO DA VELHA</Typography>
        <Box> 
          <Box  onClick={()=>priceGame()} sx={{display: 'flex', backgroundColor: 'white', 
            color: 'black', width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
            <Typography sx={{fontSize: '20px', fontWeight: 'bolder'}}> jogar por </Typography>
            <img src={coin} alt="card" className="coin"/>
            <Typography sx={{fontSize: '20px', fontWeight: 'bolder'}}>2</Typography>
          </Box>
        <Typography sx={{color: colorPurple, fontWeight: 'bold' ,textAlign: 'center', marginTop: '10px', position: 'absolute'}}>{textCoin}</Typography>

        </Box>
       
      </Wrapper>
      
    </>
  );
}

export default ContentTicTacToe;