import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import { colorPurple } from "../theme/theme";
import js from '../images/js.png';
import reactImg from '../images/react.png';
import nodeImg from '../images/node.png';
import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import muiImg from '../images/mui.png';
import gitImg from '../images/git.png';
import coin from '../images/coin.png';

function Skills() {
  return(
    <>
      <Wrapper sx={{marginTop: '100px'}} id="skills">
        <Box sx={{color: 'white', textAlign: 'center'}}>
          <Typography sx={{fontSize: { xs: '30px',md: '45px'}}}>Aqui estão minhas</Typography>
          <Typography sx={{fontSize: { xs: '30px',md: '45px'}, color: colorPurple, fontWeight: 'bolder'}}> habilidades técnicas</Typography>
        </Box>
      </Wrapper>
      <Wrapper sx={{display: 'flex', flexDirection: 'column', paddingBottom: '100px'}}>
        <Box sx={{display: 'flex', gap: {xs: '35px', md: '150px'}, marginTop: '50px', flexDirection: {xs: 'column', md: 'row'}}}>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'} ,gap: '10px'}}>
            <img src={js} alt="JavaScript" className="imgTec"/>
            <Typography sx={{fontSize: '20px', color: 'white'}}>JAVASCRIPT</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, color: 'white', gap: '10px'}}>
            <img src={reactImg} alt="React" className="imgTec"/>
            <Typography sx={{fontSize: '20px'}}>REACT.JS</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, color: 'white', gap: '10px'}}>
            <img src={nodeImg} alt="Node" className="imgTec"/>
            <Typography sx={{fontSize: '20px'}}>NODE</Typography>
          </Box>
        </Box>
        <Box sx={{display: 'flex', gap: {xs: '35px', md: '150px'}, marginTop: '50px', flexDirection: {xs: 'column', md: 'row'}}}>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, color: 'white', gap: '10px'}}>
            <img src={htmlImg} alt="HTML 5" className="imgTec"/>
            <Typography sx={{fontSize: '20px'}}>HTML 5</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, color: 'white', gap: '10px'}}>
            <img src={cssImg} alt="CSS 3" className="imgTec"/>
            <Typography sx={{fontSize: '20px'}}>CSS 3</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, color: 'white', gap: '10px'}}>
            <img src={muiImg} alt="MUI" className="imgTec"/>
            <Typography sx={{fontSize: '20px'}}>MUI</Typography>
          </Box>
        </Box>
        <Box sx={{display: 'flex', gap: '150px', marginTop: '50px'}}>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, color: 'white', gap: '10px'}}>
            <img src={gitImg} alt="GIT" className="imgTec"/>
            <Typography sx={{fontSize: '20px'}}>GIT</Typography>
          </Box>
        </Box>
      </Wrapper>
      <Wrapper>
      <a href="https://wa.me/5511964394048" target="blank">
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#a526d5', width: '300px', height: '50px'}}>
          <Typography sx={{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>ME CONTRATE</Typography>
          <img src={coin} alt="moeda" className="coin"/>
          <Typography sx={{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>1000</Typography>
        </Box>
      </a>
      
      </Wrapper>
    </>
  );
}

export default Skills;