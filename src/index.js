import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'

//React .strictmode will make the setState hook callback function trigger twice
// which will make the character move twice as far as it should be 
ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

