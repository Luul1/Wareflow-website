import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0047AB',
      light: '#4169E1',
      dark: '#00308F',
    },
    secondary: {
      main: '#00A0DC',
      light: '#33B3E3',
      dark: '#007099',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    cobalt: {
      light: '#4169E1',
      main: '#0047AB',
      dark: '#00308F',
      contrastText: '#fff'
    },
    text: {
      primary: '#1B5E20',
      secondary: '#558B2F',
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      color: '#1B5E20',
    },
    h2: {
      fontWeight: 600,
      color: '#2E7D32',
    },
    h3: {
      fontWeight: 600,
      color: '#2E7D32',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
