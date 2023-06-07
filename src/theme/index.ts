import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#f44336',
    },

    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffff',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#f44336',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
    background: {
      default: '#121212',
      paper: '#1f1f1f',
    },
  },
});
