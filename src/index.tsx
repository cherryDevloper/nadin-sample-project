import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </I18nextProvider>,
);
