 
 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
const rootEL = document.getElementById('root');

let render = () => {
  ReactDOM.render(<App />, rootEL)
}

if (module.hot){
  module.hot.accept('./App', () => {
    setTimeout(render);
  })
}

render();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
