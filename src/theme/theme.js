import { createTheme } from '@mui/material/styles';
import '@fontsource/rubik';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff0000',
      },
      secondary: {
        main: '#19857b',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 360,
        md: 760,
        lg: 1000,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: 'Rubik, Arial, sans-serif',
    },
  });

  export const colorPurple = {
    color: '#a526d5'
  }

export default theme;



