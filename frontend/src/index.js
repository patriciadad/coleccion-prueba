import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store/index'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#130f14',
      light: '#c4c8e0',
      dark: '#14247b',
      contrastText: '#dacdcd',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#d6e8db',
      paper: '#ece5e5',
    },
    text: {
      primary: 'rgba(43,40,39,0.87)',
      secondary: 'rgba(129,118,89,0.6)',
      disabled: 'rgba(103,83,83,0.38)',
      hint: '#565269',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    fontSize: 10,
    fontWeightLight: 1000,
    fontWeightRegular: 100,
    h1: {
      fontFamily: 'Oswald',
    },
  },

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CssBaseline />
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  </React.StrictMode>
  
);



/*<ThemeProvider theme={theme}>
<App />

</ThemeProvider>*/


//<ThemeProvider theme={theme}>

//</ThemeProvider>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
