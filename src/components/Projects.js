import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import { colorPurple } from "../theme/theme";
import lineEsquerda from "../images/LineEsquerda.png";
import lineDireita from "../images/LineDireita.png";
import logoNetflix from "../images/logoNetflix.png";
import buscadorCep from '../images/buscadorCep.png';
import apiSpotify from '../images/apiSpotify.png';
import cronometro from '../images/cronometro.png';
import woovi from '../images/woovi.png';
import calculadora from '../images/calculadora.png';

function Projects(){
  return(
    <>
      <Wrapper sx={{marginTop: '100px'}} id="projects">
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: {xs: 'center', md: 'left'}, width: {xs: '100¨%', md: '65%'}}}>
          <Typography sx={{fontSize: {xs: '35px', md: '60px'}, color: 'white', fontWeight: 'bold'}}>alguns dos meus</Typography>
          <Typography sx={{fontSize: {xs: '35px', md: '60px'}, color: colorPurple, fontWeight: 'bold'}}>projetos de destaque</Typography>
        </Box>
      </Wrapper>
      <Wrapper sx={{marginTop: '70px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', width: '70%'}}>
          <Box sx={{display: 'flex', flexDirection: {xs: "column", md: 'row'}, gap: '50px', width: {xs: '100%' ,lg: '70%'}}}>
            <Box sx={{width: {xs: '100%', md: '35%'}, height: {xs: '180px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
              <img src={woovi} alt="Logo da woovi" className="imgProject"/>
              <Typography sx={{color: 'white'}}>julho 2024</Typography>
            </Box>
            <Box sx={{width: {xs: '100%', md: '70%'}, marginRight: {xs: '50px', md: '100px'}}}>
              <Box sx={{marginTop: {xs: '20px', md: '0px'}, textAlign: 'center'}}>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>CHALLENGE WOOVI</Typography>
                <Typography sx={{color: 'white'}}>Durante este projeto, tive a oportunidade de aplicar e aprimorar minhas habilidades em React e MUI. 
                  Além disso, desenvolvi ainda mais minha experiência com o useState, o que foi fundamental para o resultado final.</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',gap: '20px', marginTop: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                <a href="https://challenge-woovi.netlify.app/" target="blank">
                  <Box sx={{backgroundColor: '#a526d5', width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>Ver Online</Typography>
                  </Box>
                </a>
                <a href="https://github.com/VtaZinn/woovi-challenge" target="blank">
                  <Box sx={{color: colorPurple, width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #a526d5'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>GitHub</Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wrapper>

      <Wrapper sx={{marginTop: '70px', justifyContent: {xs: 'center', lg: 'flex-end'}}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', width: '70%'}}>
          <Box sx={{display: 'flex', flexDirection: {xs: "column", md: 'row'},gap: {xs: '50px', lg: '0px'},width: {xs: '100%', lg: '70%'}}}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
             <img src={lineEsquerda} alt="foto do Victor" className="lineEsquerda"/>
             <img src={lineDireita} alt="foto do Victor" className="lineDireira"/>
            </Box>
            <Box sx={{width: {xs: '100%', md: '35%'}, height: {xs: '180px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
              <img src={logoNetflix} alt="Logo da netflix" className="imgProject"/>
              <Typography sx={{color: 'white'}}>maio 2024</Typography>
            </Box>
            <Box sx={{width: {xs: '100%'}, marginRight: {xs: '0px', md: '100px'}}}>
              <Box sx={{marginTop: {xs: '20px', md: '0px'}, textAlign: 'center'}}>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>CLONE DA NETFLIX</Typography>
                <Typography sx={{color: 'white'}}>Desenvolvi um projeto de Clone da Netflix utilizando React para a interface de usuário e integração com APIs 
                  para a exibição de filmes e séries. O projeto inclui uma interface intuitiva e responsiva, similar à da plataforma original, 
                  permitindo que os usuários naveguem por diferentes categorias.</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',gap: '20px', marginTop: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                <a href="https://clone-netflix.netlify.app/" target="blank">
                  <Box sx={{backgroundColor: '#a526d5', width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>Ver Online</Typography>
                  </Box>
                </a>
                <a href="https://github.com/VtaZinn/CloneNetflixReactJS" target="blank">
                  <Box sx={{color: colorPurple, width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #a526d5'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>GitHub</Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wrapper>

      <Wrapper sx={{marginTop: '70px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', width: '70%'}}>
          <Box sx={{display: 'flex', flexDirection: {xs: "column", md: 'row'}, gap: '50px', width: {xs: '100%' ,lg: '70%'}}}>
            <Box sx={{width: {xs: '100%', md: '35%'}, height: {xs: '180px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
              <img src={calculadora} alt="Foto Calculadora" className="imgProject"/>
              <Typography sx={{color: 'white'}}>maio 2024</Typography>
            </Box>
            <Box sx={{width: {xs: '100%', md: '70%'}, marginRight: {xs: '50px', md: '100px'}}}>
              <Box sx={{marginTop: {xs: '20px', md: '0px'}, textAlign: 'center'}}>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>CALCULADORA</Typography>
                <Typography sx={{color: 'white'}}>Desenvolvi uma Calculadora simples e eficiente utilizando HTML, CSS e JavaScript. O projeto apresenta uma 
                  interface limpa e intuitiva, permitindo aos usuários realizar operações matemáticas básicas como adição, subtração, 
                  multiplicação e divisão. Com uma estrutura de código organizada e responsiva, a calculadora funciona perfeitamente 
                  em diferentes dispositivos e tamanhos de tela. Este projeto demonstra minhas habilidades em criar aplicações web 
                  interativas e funcionais, utilizando tecnologias fundamentais do front-end.</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',gap: '20px', marginTop: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                <a href="https://vta-calculadorajs.netlify.app/" target="blank">
                  <Box sx={{backgroundColor: '#a526d5', width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>Ver Online</Typography>
                  </Box>
                </a>
                <a href="https://github.com/VtaZinn/CalculadoraJS" target="blank">
                  <Box sx={{color: colorPurple, width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #a526d5'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>GitHub</Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wrapper>

      <Wrapper sx={{marginTop: '70px', justifyContent: {xs: 'center', lg: 'flex-end'}}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', width: '70%'}}>
          <Box sx={{display: 'flex', flexDirection: {xs: "column", md: 'row'},gap: {xs: '50px', lg: '0px'},width: {xs: '100%', lg: '70%'}}}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
             <img src={lineEsquerda} alt="foto do Victor" className="lineEsquerda"/>
             <img src={lineDireita} alt="foto do Victor" className="lineDireira"/>
            </Box>
            <Box sx={{width: {xs: '100%', md: '35%'}, height: {xs: '180px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
              <img src={cronometro} alt="Foto do cronometro" className="imgProject"/>
              <Typography sx={{color: 'white'}}>julho 2023</Typography>
            </Box>
            <Box sx={{width: {xs: '100%'}, marginRight: {xs: '0px', md: '100px'}}}>
              <Box sx={{marginTop: {xs: '20px', md: '0px'}, textAlign: 'center'}}>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>CRONÔMETRO REACT NATIVE</Typography>
                <Typography sx={{color: 'white'}}>Desenvolvi um Cronômetro utilizando React Native, projetado para oferecer uma experiência simples e eficiente 
                  em dispositivos móveis. O aplicativo permite aos usuários iniciar, pausar e resetar o cronômetro com facilidade, 
                  além de visualizar o tempo decorrido com precisão. A interface é minimalista e intuitiva, garantindo uma navegação 
                  fluida e responsiva. Este projeto destaca minha capacidade de criar aplicações móveis funcionais e bem estruturadas, 
                  utilizando o React Native para entregar uma experiência de usuário otimizada.</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',gap: '20px', marginTop: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                <a href="https://github.com/VtaZinn/CronometroReactNative" target="blank">
                  <Box sx={{color: colorPurple, width: {xs: '150px', md: '300px', lg: '400px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #a526d5'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>GitHub</Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wrapper>

      <Wrapper sx={{marginTop: '70px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', width: '70%'}}>
          <Box sx={{display: 'flex', flexDirection: {xs: "column", md: 'row'}, gap: '50px', width: {xs: '100%' ,lg: '70%'}}}>
            <Box sx={{width: {xs: '100%', md: '35%'}, height: {xs: '180px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
              <img src={apiSpotify} alt="Foto da Api" className="imgProject"/>
              <Typography sx={{color: 'white'}}>junho 2023</Typography>
            </Box>
            <Box sx={{width: {xs: '100%', md: '70%'}, marginRight: {xs: '50px', md: '100px'}}}>
              <Box sx={{marginTop: {xs: '20px', md: '0px'}, textAlign: 'center'}}>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>API SPOTIFY</Typography>
                <Typography sx={{color: 'white'}}>Desenvolvi uma Playlist do Spotify utilizando HTML, CSS e JavaScript, integrando a API do Spotify para acessar 
                  e exibir detalhes de cada música da playlist. Os usuários podem inserir o link da playlist e o aplicativo carrega automaticamente 
                  informações como título, artista, álbum e tempo de cada faixa.</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',gap: '20px', marginTop: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                <a href="https://playlist-vta.netlify.app/" target="blank">
                  <Box sx={{backgroundColor: '#a526d5', width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>Ver Online</Typography>
                  </Box>
                </a>
                <a href="https://github.com/VtaZinn/PlaylistAPI" target="blank">
                  <Box sx={{color: colorPurple, width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #a526d5'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>GitHub</Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wrapper>
      
      <Wrapper sx={{marginTop: '70px', justifyContent: {xs: 'center', lg: 'flex-end'}}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', width: '70%'}}>
          <Box sx={{display: 'flex', flexDirection: {xs: "column", md: 'row'},gap: {xs: '50px', lg: '0px'},width: {xs: '100%', lg: '70%'}}}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
             <img src={lineEsquerda} alt="foto do Victor" className="lineEsquerda"/>
            </Box>
            <Box sx={{width: {xs: '100%', md: '35%'}, height: {xs: '180px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", margin: '20px'}}>
              <img src={buscadorCep} alt="Foto do Site" className="imgProject"/>
              <Typography sx={{color: 'white'}}>junho 2023</Typography>
            </Box>
            <Box sx={{width: {xs: '100%'}, marginRight: {xs: '0px', md: '100px'}}}>
              <Box sx={{marginTop: {xs: '20px', md: '0px'}, textAlign: 'center'}}>
                <Typography sx={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>BUSCADOR DE CEP</Typography>
                <Typography sx={{color: 'white'}}>Desenvolvi um Buscador de CEP utilizando HTML, CSS, JavaScript e uma API de serviços postais. 
                  Este projeto permite aos usuários inserir um CEP e obter informações detalhadas como logradouro, bairro, 
                  cidade e estado de forma instantânea. A interface é simples e intuitiva, proporcionando uma experiência de 
                  usuário eficiente e acessível. Essa aplicação demonstra minha habilidade em utilizar tecnologias front-end e
                  integrar APIs para criar soluções práticas e úteis na web.</Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',gap: '20px', marginTop: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                <a href="https://buscadorcep-vta.netlify.app/" target="blank">
                  <Box sx={{backgroundColor: '#a526d5', width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>Ver Online</Typography>
                  </Box>
                </a>

                <a href="https://github.com/VtaZinn/CepReactJS" target="blank">
                  <Box sx={{color: colorPurple, width: {xs: '150px', lg: '200px'}, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #a526d5'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>GitHub</Typography>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
}

export default Projects;
