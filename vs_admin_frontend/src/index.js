import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginContext } from './context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<<<<<<< HEAD
  <LoginContext.Provider>
    <App />
  </LoginContext.Provider>
=======
    <App />
>>>>>>> 79a94fb5a68128331d0c5d5bde460e6d067f27e7
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
