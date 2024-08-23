import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import { colorPurple } from "../theme/theme";
import TriangleGray from "../images/triangleGray.png";
import imgLinkedin from "../images/linkedin.png";
import imgCurriculo from "../images/curriculo.png";
import imgGithub from "../images/github.png";
import imgEmail from '../images/email.png';
import imgWhats from '../images/whatsapp.png';

function Footer() {
  return(
    <>
      <Wrapper id="contacts" sx={{marginTop: '100px', paddingBottom: '200px', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
        <Box sx={{display: 'flex', width: {xs: '80%', lg: '60%'},gap: '20px' ,justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
          <Box sx={{width: {xs: '100%', md: '40%'}}}>
            <Box sx={{display: 'flex', gap: '8px', flexDirection: {xs: 'column', xl: 'row'}}}>
              <Typography sx={{fontSize: '40px', fontWeight: 'bold', color: 'white'}}>ENTRE EM</Typography>
              <Typography sx={{fontSize: '40px', fontWeight: 'bold', color: colorPurple}}>CONTATO</Typography>
            </Box>
            <Box>
              <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <img src={TriangleGray} className="triangleGray" alt='triangle'/>
                <Box sx={{backgroundColor: '#FFFFFF20', color: 'white', height: '50px', width: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '15px', marginLeft: '5px'}}>
                  <Typography sx={{fontSize: {xs: '15px',xl: '23px'}}}>Muito obrigado pela visita!</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{width: {xs: '100%', md: '40%'}, display: 'flex', flexDirection: 'column', gap: '10px', marginTop: {xs: '20px'}}}>
            <a href="https://www.linkedin.com/in/victor-augusto-010156297/" target="blank">
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '15px'}}>
                <img src={imgLinkedin} className="triangleGray" alt='LINKEDIN'/>
                <Typography sx={{fontWeight: 'bold'}}>LINKEDIN</Typography>
              </Box>
            </a>
              
            <a href="https://github.com/VtaZinn" target="blank">
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '15px'}}>
                <img src={imgGithub} className="triangleGray" alt='GITHUB'/>
                <Typography sx={{fontWeight: 'bold'}}>GITHUB</Typography>
              </Box>
            </a>
            
              
            <a href="https://drive.google.com/drive/folders/1KxiwtnOGOZOiR3utpsvIxnJJvk7T3-Qy?usp=sharing" target="blank">
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '15px'}}>
                <img src={imgCurriculo} className="triangleGray" alt='CURRÍCULO'/>
                <Typography sx={{fontWeight: 'bold'}}>CURRÍCULO</Typography>
              </Box>
            </a>
                
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '15px'}}>
              <img src={imgEmail} className="triangleGray" alt='EMAIL'/>
              <Typography sx={{fontWeight: 'bold', color: 'white'}}>augustovta416@gmail.com</Typography>
            </Box>
            
            <a href="https://wa.me/5511964394048" target="blank">
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '15px'}}>
                <img src={imgWhats} className="triangleGray" alt='TELEFONE'/>
                <Typography sx={{fontWeight: 'bold'}}>(11)96439-4048</Typography>
              </Box>
            </a>
            </Box>S
        </Box>
      </Wrapper>
    </>
  );
}

export default Footer;