import { Box, Button, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import '../style/Home.css'
import Coin from '../images/coin.png'
import { useRef } from "react";

function GetName(props) {
  const inputRef = useRef(null);

  function getName() {
    const currentName = inputRef.current.value;
  
    if(currentName){
      localStorage.setItem('name', currentName);
      localStorage.setItem('coin', 5);
    } else {
      localStorage.setItem('name','Misterioso(a)');
      localStorage.setItem('coin', 0);
    }

    window.location.assign('/home');
  }

  return(
    <>
    <Box sx={{zIndex: 1, position: 'relative'}}>
      <Wrapper>
        <Typography sx={{color: 'white', fontSize: '25px'}}>VICTOR AUGUSTO PORTFOLIO</Typography>
      </Wrapper>
      <Wrapper>
        <Box sx={{height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '606px', flexDirection: 'column'}}>
        <Typography sx={{color: 'white', fontSize: '40px', textAlign: 'center'}}> Para uma melhor experiência digite seu nome</Typography>
          <Box sx={{display: 'flex', borderBottom: '1px solid white', marginTop: '50px', paddingBottom: '10px', gap: '20px', width: '75%'}}>
            <input type="text" placeholder="Nome:" ref={inputRef} className="inputName"></input>
            <Button onClick={()=>getName()} sx={{backgroundColor: '#a526d5', color: 'white', width: '100px', fontWeight: 'bolder'}}>ENVIAR</Button>
          </Box>
          <Box sx={{display: 'flex', gap: '7px', marginTop: '30px', alignItems: 'center'}}>
            <img src={Coin} alt="Moeda"/>
            <Typography sx={{color: 'white', fontSize: '22px'}}>ganhe </Typography>
            <Typography sx={{color: '#a526d5', fontSize: '22px'}}> 5 moedas</Typography>
            <Typography sx={{color: 'white', fontSize: '22px'}}>por responder isso</Typography>
          </Box>
        </Box>
      </Wrapper>
      <Wrapper>
        <Box sx={{border: '1px solid white', width: '230px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography sx={{color: 'white'}}>NÃO QUERO MOEDAS</Typography>
        </Box>
      </Wrapper>
      </Box>
    </>
  );
}

export default GetName;

