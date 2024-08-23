import { Box } from "@mui/material";
import '../style/Home.css'
import Top from "./Top";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContentTicTacToe from "./ContentTicTacToe";
import Projects from "./Projects";
import Line from "./Line";
import Footer from "./Footer";
import { useState } from "react";

function Home(props){
  const [coin, setCoin] = useState(parseInt(localStorage.getItem('coin')));

  return(
    <>
     <Box sx={{zIndex: 1, position: 'relative'}}>
       <Top currentCoin={coin}/>
       <AboutMe currentCoin={coin} onChange={setCoin}/>
       <Line/>
       <Skills/>
       <Line/>
       <ContentTicTacToe />
       <Line />
       <Projects/>
       <Line/>
       <Footer/>
      </Box>
    </>
  );
}

export default Home;
