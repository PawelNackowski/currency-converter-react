import React from 'react';
import ReactDOM from 'react-dom/client';
import { GLobalStyle } from './GlobalStyle';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <GLobalStyle />
      <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
