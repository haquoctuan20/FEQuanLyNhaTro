import '@fortawesome/fontawesome-free/css/all.min.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ThemeProviderStyled from './styledComponents/ThemeProviderStyled';

ReactDOM.render(
  <HelmetProvider>
    <ThemeProviderStyled>
      <App />
    </ThemeProviderStyled>
  </HelmetProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
