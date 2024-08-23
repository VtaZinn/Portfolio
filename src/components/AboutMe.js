import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import fotoVictor from "../images/fotoVictor.jpg";
import { colorPurple } from "../theme/theme";
import coin from "../images/coin.png";
import '../style/Home.css';
import { useState } from "react";
import Modal from '@mui/material/Modal';

function AboutMe(props) {
  const [openBefounder, setOpenBefounder] = useState(false);
  const [openRedeSocial, setOpenRedeSocial] = useState(false);
  const [openReactNative, setOpenReactNative] = useState(false);

  function addCoin() {
    localStorage.setItem('coin', props.currentCoin + 1);
    props.onChange(props.currentCoin +1);
  }

  function openModal(modalName) {
    addCoin();
    console.log(modalName)
    if(modalName === 'BeFounder') {
      setOpenBefounder(true);
    }

    if(modalName === 'RedeSocial'){
      setOpenRedeSocial(true)
    }

    if(modalName === 'ReactNative'){
      setOpenReactNative(true)
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    p: 4,
  };
  
  return(
    <> 
      <Wrapper id="about" sx={{marginTop: '100px', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
        <Box sx={{color: 'white', maxWidth: {xs: '330px',md: '700px'}, textAlign: {xs: 'center', md: 'left'}, marginRight: {xs: '0px', md: '50px'}}}>
          <Typography sx={{fontSize: '40px', textAlign: 'center'}}> quem é</Typography>
          <Typography sx={{fontSize: '40px', fontWeight: 'bold', color: colorPurple, marginTop: '-20px',  textAlign: 'center'}}> Victor Augusto</Typography>
          <Typography sx={{fontSize: {xs: '20px', md: '25px'}, marginTop: '30px'}}>Sou desenvolvedor web especializado em React.js com experiência em criar 
            interfaces de usuário dinâmicas e responsivas. Atualmente trabalho de forma autônoma desenvolvendo sites e landing pages do inicio ao fim.
            <p className="paragrafo">Tenho formação em Web Design, Técnico em Informática para Web e atualmente estou cursando um Bootcamp de Desenvolvedor Web.
            Já tive experiência com vendas e atendimento ao cliente, e com isso pude desenvolver habilidades de comunicação, trabalho em equipe e gestão.</p></Typography>
        </Box>
        <Box sx={{width: '300px', height: '300px', marginTop: {xs: '50px', lg: '0px'}}}>
          <img src={fotoVictor} alt="foto do Victor" className="fotoVictor"/>
        </Box>
      </Wrapper>
      <Wrapper sx={{marginTop: '100px', gap: '70px', display: 'flex', flexDirection: {xs: 'column', md: 'row'} }}>

         {/* MODAL BEFOUNDER */}

         <Box onClick={()=>openModal('BeFounder')} sx={{color: 'white', backgroundColor: '#a526d5', width: '200px',height: '80px', borderRadius: '15px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', flexDirection: 'column', cursor: 'pointer'}}>
          <Typography sx={{fontSize: '20px'}}>CURIOSIDADE</Typography>
          <Box sx={{display: 'flex'}}>
            <img src={coin} alt="moeda" className="coin"/>
            <Typography sx={{fontSize: '20px'}}> + 1</Typography>
          </Box>
        </Box>
        <Modal
            open={openBefounder}
            onClose={()=>setOpenBefounder(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography sx={{fontSize: '20px', textAlign: 'center', fontWeight: 'bolder', marginBottom: '30px'}}>
                Projeto BeFounder
              </Typography>
              <Typography sx={{textAlign: 'center'}}>
              Recentemente, desenvolvi as interfaces de um projeto inovador criado por mim e minha namorada. 
              A ideia por trás desse projeto é simples: ajudar pessoas a criarem seus próprios sites de maneira 
              rápida e fácil, sem a necessidade de conhecimentos técnicos avançados. Por meio de uma plataforma 
              intuitiva e acessível, oferecendo ferramentas flexíveis que permitem 
              a personalização completa dos sites, tornando o processo criativo mais leve e eficiente.
              </Typography>
            </Box>
          </Modal>


         {/* MODAL REDE SOCIAL */}

         <Box onClick={()=>openModal('RedeSocial')} sx={{color: 'white', backgroundColor: '#a526d5', width: '200px',height: '80px', borderRadius: '15px', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', flexDirection: 'column', cursor: 'pointer'}}>
            <Typography sx={{fontSize: '20px'}}>CURIOSIDADE</Typography>
            <Box sx={{display: 'flex'}}>
              <img src={coin} alt="moeda" className="coin"/>
              <Typography sx={{fontSize: '20px'}}> + 1</Typography>
            </Box>
          </Box>
          <Modal
            open={openRedeSocial}
            onClose={()=>setOpenRedeSocial(false)}
          >
            <Box sx={style}>
              <Typography sx={{fontSize: '20px', textAlign: 'center', fontWeight: 'bolder', marginBottom: '30px'}}>
                Projeto Rede Social
              </Typography>
              <Typography sx={{textAlign: 'center'}}>
                Estou desenvolvendo uma rede social inspirada no Instagram como projeto de um bootcamp. 
                A aplicação oferece funcionalidades como a alteração de foto de perfil e nome de usuário. Além disso, os usuários podem adicionar imagens,
                explorar postagens, e interagir com o conteúdo por meio de curtidas. O projeto foca em uma interface 
                intuitiva e responsiva, garantindo uma experiência de usuário fluida e dinâmica em dispositivos móveis e desktops.
              </Typography>
            </Box>
          </Modal>

          {/* MODAL REACT NATIVE */}

          <Box onClick={()=>openModal('ReactNative')} sx={{color: 'white', backgroundColor: '#a526d5', width: '200px',height: '80px', borderRadius: '15px', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', flexDirection: 'column' , cursor: 'pointer'}}>
            <Typography sx={{fontSize: '20px'}}>CURIOSIDADE</Typography>
            <Box sx={{display: 'flex'}}>
              <img src={coin} alt="moeda" className="coin"/>
              <Typography sx={{fontSize: '20px'}}> + 1</Typography>
            </Box>
          </Box>
          <Modal
            open={openReactNative}
            onClose={()=>setOpenReactNative(false)}
          >
            <Box sx={style}>
              <Typography sx={{fontSize: '20px', textAlign: 'center', fontWeight: 'bolder', marginBottom: '30px'}}>
                Aplicativo para celular com acesso a Câmera
              </Typography>
              <Typography sx={{textAlign: 'center'}}>
                Desenvolvi uma aplicação mobile em React Native com integração à câmera fotográfica, 
                permitindo que os usuários capturem imagens diretamente do aplicativo. As fotos capturadas 
                são armazenadas e gerenciadas em um banco de dados SQL. O projeto foca na usabilidade e na conexão entre recursos nativos do dispositivo 
                e o back-end, proporcionando uma experiência completa de captura e armazenamento de dados.
              </Typography>
            </Box>
          </Modal>
      </Wrapper>
    </>
  );
}

export default AboutMe;