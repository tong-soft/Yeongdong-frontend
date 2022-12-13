import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { createGlobalStyle } from 'styled-components';
import './index.css';

const GlobalStyle = createGlobalStyle`
    html, body {
      padding : 0;
      margin : 0;
      font-family: -apple-system, BlinkMacSystemFont,'Noto Sans KR' ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

      @media (max-width: 1200px) {
        font-size: 14px
      }
      @media (max-width: 1024px) {
        font-size: 12px
      }
      @media (max-width: 768px) {
        font-size: 8px
      }
    }
    #root{
      width : 100%;
      height : auto;
      margin : 0px;
      padding : 0px;
    }
`;

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
