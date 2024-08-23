import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import '../style/Home.css'
import { colorPurple } from "../theme/theme";
import TriangleGray from "../images/triangleGray.png";
import TrianglePurple from "../images/trianglePurple.png";
import Coin from "../images/coin.png";
import React, { useState, useEffect } from "react";

function Top(props) {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Atualiza a hora a cada segundo
    const timer = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      updateGreeting(currentTime.getHours());
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, []);

  // Função para definir saudação
  const updateGreeting = (hours) => {
    if (hours >= 5 && hours < 12) {
      setGreeting("Bom dia");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const name = localStorage.getItem('name');



  return(
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '50px', marginTop: '30px', position: 'fixed', right: 0 }}>
        <img src={Coin} alt="Moeda" />
        <Typography sx={{ color: 'white', fontSize: '20px', marginLeft: '5px' }}>{props.currentCoin}</Typography>
      </Box>
      <Wrapper sx={{ color: 'white', height: '60vh' }}>
        <Box sx={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', fontSize: '50px', gap: '5px', flexDirection: {xs: 'column', md: 'row'}, textAlign: 'center'}}>
            <Typography sx={{ fontSize: {xs: '40px', lg: '50px'}, marginTop: {xs:'200px', md: '0px'}, lineHeight: {xs: '40px'}}}>{greeting},</Typography>
            <Typography sx={{  fontSize: {xs: '40px', lg: '50px'}, color: colorPurple, fontWeight: 'bolder', lineHeight: {xs: '40px'}}}>{name}!</Typography>
          </Box>
          <Box sx={{width:'100%', margin: 'auto', marginTop: '30px'}}>
            <Typography sx={{ fontSize: {xs: '20px', md:'25px'}, textAlign: 'center' }}>
              Seja bem vindo ao meu portfólio {name}, estou muito feliz com sua visita! Este portfólio vai ser bem diferente do que você já viu por aí.
              Fiz ele com intuito de ser bem descontraído, e ao mesmo tempo falar sobre minhas experiências e aprendizados!
            </Typography>
            {name != 'Misterioso(a)' && 
            <>
              <Typography sx={{ width: '100%', marginTop: '30px', textAlign: 'center', fontSize: '20px' }}>Ah, antes que eu me esqueça, você ganhou 5 moedas! 🤑 </Typography>
              <Typography sx={{ textAlign: 'center' }}>Jaja você vai poder ostentá-las 💸</Typography>
            </>
            } 
            {name == 'Misterioso(a)' && 
            <Typography sx={{ width: '100%', marginTop: '30px', textAlign: 'center', fontSize: '20px' }}> Você não ganhou suas moedas iniciais (ao não dizer seu nome) mas fique calmo! Você terá outras chances!</Typography>
            }
          </Box>
        </Box>
      </Wrapper>
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: {xs : '0px', md: '150px'}, width: {xs: '70%'}, marginTop: {xs: '150px', md: '0px'} }}>
        <img src={TriangleGray} className="triangleGray" alt="Gray Triangle" />
        <Box sx={{ backgroundColor: '#FFFFFF20', color: 'white', height: {xs: '40px', md: '50px'} , width: {xs: '350px', md: '450px'} , display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '15px', marginLeft: '5px' }}>
          <Typography sx={{ fontSize: {xs: '20px', md: '25px'}}}>E aí, o que você deseja fazer?</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px', marginRight: {xs: '0px', lg: '150px'}}}>
        <Box sx={{ backgroundColor: '#a526d552', color: 'white', height: {xs: 'auto',  md: '50px'}, width: {xs: '80%', md: '100%', lg: '60%'}, display: 'flex', 
        justifyContent: 'center', alignItems: 'center', borderRadius: '15px', flexDirection: {xs: 'column', md: 'row'}, gap: {xs: '15px', md: '0px'}}}>
          <Typography sx={{ fontSize: '20px', cursor: 'pointer'}} onClick={() => scrollToSection('about')}>SOBRE MIM</Typography>
          <Typography sx={{ fontSize: '20px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('skills')}>MINHAS SKILLS</Typography>
          <Typography sx={{ fontSize: '20px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('projects')}>PROJETOS</Typography>
          <Typography sx={{ fontSize: '20px', marginLeft: '30px', cursor: 'pointer' }} onClick={() => scrollToSection('contacts')}>CONTATOS</Typography>
        </Box>
        <img src={TrianglePurple} className="trianglePurple" alt="Purple Triangle" />
      </Box>
    </>
  );
}

export default Top;