import { Box, ThemeProvider } from '@mui/material';
import theme from './theme/theme'
import '@fontsource/rubik';
import Home from './components/Home';
import Background from './animation/Background';
import './App.css';
import GetName from './components/GetName';
import TicTacToe from './game/TicTacToe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <ThemeProvider theme={theme} >
    <Box sx={{zIndex: 0, position: 'absolute'}}>
      <Background />
    </Box>
    <Router>
      <Routes>
        <Route path="/" element={<GetName/>} />
        <Route path="/home" element={ <Home />} />
        <Route path="/tic-tac-toe" element={ <TicTacToe/>} />
      </Routes>
    </Router>
  </ThemeProvider>
  </>
  );
}

export default App;
